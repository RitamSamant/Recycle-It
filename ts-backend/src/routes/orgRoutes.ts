import express, { Router } from 'express'
const router : Router = express()

import authentication from '../middleware/authentication'
import orgController from '../controllers/orgController'
import warehouseController from '../controllers/warehouseController'

router.post("/register", orgController.registerOrg);
router.post("/login", orgController.orgLogin);
router.post("/dashboard/claim", authentication, orgController.overall);

router.get(
  "/dashboard/products",
  authentication,
  warehouseController.getProducts
);

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

export default router