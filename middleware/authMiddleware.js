const jwt = require("jsonwebtoken");

const {User }= require("../models/userModel");

exports.authenticate = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    //console.log(token)
    const id = jwt.verify(token, process.env.Token);
    //console.log(id.userId)
    const user = await User.findById(id.userId);
    req.user = user;
    // console.log(req.user);
    next();
  } catch (err) {
    console.log(err);
  }
};
