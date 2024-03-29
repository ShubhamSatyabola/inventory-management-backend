require("dotenv").config();
const path = require("path")
const express = require("express");
const cors = require("cors");
const main = require("./util/db");

//routes
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

const server = express();
server.use(express.static(path.resolve(__dirname, "build")));
//middlewares
server.use(cors());
server.use(express.json());
server.use('/auth', authRoutes);
server.use('/component', productRoutes)

// this line we add to make react router work in case of other routes doesnt match
server.get('*', (req, res) =>
  res.sendFile(path.resolve('build', 'index.html'))
);
main()
  .then(() => {
    server.listen(process.env.PORT, console.log("listening to port 5000"));
  })
  .catch((err) => console.log(err));