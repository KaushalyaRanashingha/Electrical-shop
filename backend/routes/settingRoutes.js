const express = require('express');
const router = express.Router();
const settingController = require('../controller/settingController');
router.get('/', settingController.getSetting);
module.exports = router;