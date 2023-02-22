const express = require("express");

const router = express.Router();

const adminController = require("../controllers/admin.js");

router.post("/add-product", adminController.postAddProduct);

router.get("/products", adminController.getProducts);

// router.post("/edit-product/:prodId", adminController.postEditProduct);

router.delete("/delete-product/:prodId", adminController.postDeleteProduct);


module.exports = router;