const {User} = require('../models/userModel');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//function to generate Token for authorization
function generateToken(id) {
  return jwt.sign({ userId: id }, process.env.Token);
}
exports.createUser = async (req, res) => {
  try {
    // Check if the username or email is already taken
    const{email} = req.body;
    const existingUser = await User.findOne({ $or: [{ email }] });
    if (existingUser) {
      return res.status(400).json(" email is already taken");
    }
    const saltRounds = 10;
    bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
      //   console.log(err);
      const user = new User(req.body);
      user.password = hash;
      const response = await user.save();
      return res
        .status(201)
        .json({
          message: "user sign up sucessfully",
          token: generateToken(response.id),
        });
      
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.checkUser = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findOne({ $or: [{ email }] });
    console.log(user)
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ success: true, error: "Something Went Wrong" });
        }
        if (result == true) {
          return res
            .status(201)
            .json({
              message: "user logged in sucessfully",
              token: generateToken(user.id),
            });
        } else {
          return res.status(401).json({ error: "incorrect password" });
        }
      });
    } else {
      res.status(404).json({ error: "user not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};