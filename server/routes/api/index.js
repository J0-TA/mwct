const router = require('express').Router();

router.use('/shorturl', require('./shorturl'));

module.exports = router;