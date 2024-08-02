const express = require('express');
const router = express.Router();

const data = require('./data');
const component = require('./component');

router.use('/api/data', data);
router.use('/api/v1', component);


module.exports = router;