import express, { Router } from 'express'
const router : Router = express()

import authentication from '../middleware/authentication'
import clientController from '../controllers/clientController'
import warehouseController from '../controllers/warehouseController'

router.post("/register", clientController.clientRegister);

router.post("/login", clientController.clientLogin);

router.post("/dashboard/claim", authentication, clientController.claimedAmount);

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

export default router