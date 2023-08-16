const express = require("express");
const router = express.Router();

const authentication = require("../middleware/authentication");
const orgController = require("../controllers/orgController");
const warehouseController = require("../controllers/warehouseController");

router.post("/register", orgController.registerOrg);
router.post("/login", orgController.orgLogin);
router.post("/claim", authentication, orgController.overall);

router.get("/products", authentication, warehouseController.getProducts);

router.post(
  "/products/:productid",
  authentication,
  warehouseController.orderProduct3
);

router.get(
  "/dashboard/orderedItems",
  authentication,
  warehouseController.orderedHistory3
);

router.post(
  "/wishlist/products/:productid",
  authentication,
  warehouseController.addinWishlist3
);

router.get(
  "/dashboard/wishlistedProduct",
  authentication,
  warehouseController.wishlistedItems3
);

module.exports = router;
