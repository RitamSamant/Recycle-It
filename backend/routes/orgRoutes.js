const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const authentication = require("../middleware/authentication");
const orgController = require("../controllers/orgController");

router.post("/register", orgController.registerOrg);
router.post("/login", orgController.orgLogin);
router.post("/claim", authentication, orgController.overall);

module.exports = router;
