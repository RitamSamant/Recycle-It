const express = require("express");
const router = express.Router();
const authentication = require("../middleware/authentication");
const warehouseController = require("../controllers/warehouseController");

router.post("/register", warehouseController.register);

router.post("/login", warehouseController.login);

router.get("/products", authentication, warehouseController.getProducts);

router.post(
  "/products/:productid",
  authentication,
  warehouseController.orderProduct
);

router.get(
  "/products/orderedItems",
  authentication,
  warehouseController.orderedHistory
);

router.post(
  "/wishlist/products/:productid",
  authentication,
  warehouseController.addinWishlist
);

router.get(
  "/products/wishlistedProduct",
  authentication,
  warehouseController.wishlistedItems
);

module.exports = router;
