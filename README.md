# Inventory management

# Description

This repository contains Backend source code for an inventory management  web app . The backend of web app is created using Node , Express js and MongoDb and moongoose . The code is wriiten using MVC architecture .

# Features
signup/sign in feature . \
CRUD .\
Authentication using Jwt. \



# Project folder Structure
`index.js` : It is main file for server setup and handling all the middleware logic.

for All the Logic related to Schema  Locate `models` folder. This folder handle Schema structure . Model folder has . \

`/models/userModel` .\
It handle user Schema 

`/models/productModel`.\
handles product Schema. 

for Routes Locate `routes` folder. This folder handles all the routes in the application . routes folder has . \

`/routes/userRoutes`\
Handles routes related to user.\

`/routes/products`\
Handle routes related to Product


for controller logic Locate `controllers` folder. This folder handles all the logic like sign up , login , placing order, cancelling order  in the application . controller folder . \

`/controllers/authController`\
Handles logic of login , signup. \
`/controllers/productController` \
Handles logic of product functionalities like create , fetch , update, delete




# Project set up

clone Repo using
 ```
https://github.com/ShubhamSatyabola/inventory-management-backend.git
```
Create a `.env` file and create variables \

`PORT=5000` for port number.\

`MONGODB_URL="paste your mongo db atlas connection string"`\

`Token="secret key for your jwt"`\

Run npm install to install all dependencies
```
npm install
```
Run npm start to sart the server . Server will start running on [http://localhost:8080]
```
npm start
```

# API Endpoints
## Auth Endpoints : for Sign Up and Login Functionality
### POST : `http://localhost:5000/auth/signup` 
### POST : `http://localhost:5000/auth/login`
## Products Endpoints : for Creating and fetching products.
### POST : `http://localhost:5000/component/create` 
### GET : `http://localhost:5000/component/fetch`
### PATCH : `http://localhost:8080/component/dispatch/:id` id of the product need to be updated
### DELETE : `http://localhost:8080/component/delete/:id` id of the product need to be DELETED




# Contributor
Shubham satyabola



