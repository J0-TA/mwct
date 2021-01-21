require('dotenv').config();

const express = require('express');
const router = express.Router();
const ShorUrl = require('../../models/ShortUrl');

router.get('/all', (req,res,next) => {
    ShorUrl.find()
        .sort({createdAt: 1})
        .then(allUrls => res.json(allUrls))
        .catch(err => res.json(err))
});

module.exports = router;