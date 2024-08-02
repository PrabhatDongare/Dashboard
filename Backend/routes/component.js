const express = require('express');
const router = express.Router();

const { component2, component4, component6 } = require('../controller/componentController')

router.post("/component-2", component2);
router.post("/component-4", component4);
router.post("/component-6", component6);

module.exports = router;