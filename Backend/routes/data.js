const express = require('express');
const router = express.Router();

const { insertData } = require('../controller/dataController')

router.post("/insert", insertData);

module.exports = router;