const { Component } = require("../models/productModel");

exports.createProduct = async (req, res) => {
  try {
    console.log(req.body);
    const { name, received_quantity, received_date } = req.body;
    const component = new Component({
      name,
      date: { received_date },
      quantity: { received_quantity },
    });
    const response = await component.save();
    res.status(201).json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

exports.fetchProduct = async (req, res) => {
  try {
    const components = await Component.find();
    console.log(components);
    res.status(200).json(components);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const {
      name,
      received_quantity,
      received_date,
      dispatched_quantity,
      dispatched_date,
    } = req.body;
    const parsedDateR = new Date(received_date);
    const parsedDateD = dispatched_date ? new Date(dispatched_date) : null;
    const updateObj = {
      name,
      "date.received_date": parsedDateR,
      "date.dispatched_date": parsedDateD,
      "quantity.received_quantity": received_quantity,
      "quantity.dispatched_quantity": dispatched_quantity,
    };

    const component = await Component.findByIdAndUpdate(id, updateObj, {
      new: true,
    });
    // console.log(component);
    res.status(201).json(component);
  } catch (err) {
    console.log(error);
  }
};


exports.deleteItem = async (req, res) => {
  try {
    const { id } = req.params;

  
    // Find cart items by  ID
    const component = await Component.findByIdAndDelete(id);

    // Send the updated user as a JSON response
    res.status(201).json(component);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};