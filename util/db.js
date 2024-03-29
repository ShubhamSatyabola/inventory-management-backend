const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("db connected");
  } catch (err) {
    console.log(err);
  }

}

module.exports = main;
