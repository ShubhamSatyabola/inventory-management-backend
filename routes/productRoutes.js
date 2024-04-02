const express = require("express");
const { createProduct, fetchProduct, updateProduct, deleteItem } = require("../controllers/productController");
const { authenticate } = require("../middleware/authMiddleware");



const router = express.Router();

router.post("/create", authenticate , createProduct );
router.get("/fetch" ,fetchProduct);
router.patch("/dispatch/:id", authenticate ,updateProduct);
router.delete("/delete/:id", authenticate , deleteItem);

module.exports = router;
