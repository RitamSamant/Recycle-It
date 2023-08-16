const express = require("express");
const router = express.Router();

const authentication = require("../middleware/authentication");
const clientController = require("../controllers/clientController");
const warehouseController = require("../controllers/warehouseController");

router.post("/register", clientController.clientRegister);

router.post("/login", clientController.clientLogin);

router.post("/claim", authentication, clientController.claimedAmount);

router.get(
  "/dashboard/products",
  authentication,
  warehouseController.getProducts
);

router.post(
  "/products/:productid",
  authentication,
  warehouseController.orderProduct2
);

router.get(
  "/dashboard/orderedItems",
  authentication,
  warehouseController.orderedHistory2
);

router.post(
  "/wishlist/products/:productid",
  authentication,
  warehouseController.addinWishlist2
);

router.get(
  "/dashboard/wishlistedProduct",
  authentication,
  warehouseController.wishlistedItems2
);

module.exports = router;
