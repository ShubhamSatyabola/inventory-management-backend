const express = require("express");
const { createProduct, fetchProduct, updateProduct, deleteItem } = require("../controllers/productController");



const router = express.Router();

router.post("/create", createProduct );
router.get("/fetch", fetchProduct);
router.patch("/dispatch/:id",updateProduct);
router.delete("/delete/:id",deleteItem)

module.exports = router;
