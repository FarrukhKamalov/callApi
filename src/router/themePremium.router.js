const express = require("express");
const router = express.Router();
const ThemePremium = require("../controller/themePremium.contorller");

router.get("/", ThemePremium.AllthemePremium);
router.get("/:id", ThemePremium.getOneThemePremium);

module.exports = router;
