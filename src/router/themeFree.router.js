const express = require('express');
const router = express.Router();
const themeFree = require('../controller/themeFree.controller');
const theme = require('../models/theme');

router.get('/', themeFree.AllthemeFree);
router.get('/:id', themeFree.getOneThemeFree);




module.exports = router;