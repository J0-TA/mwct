const router = require('express').Router();

router.use('/', require('./shorturl'));

module.exports = router;