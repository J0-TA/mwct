require('dotenv').config();

const express = require('express');
const router = express.Router();
const ShortUrl = require('../models/ShortUrl');

router.get('/all', (req,res,next) => {
    ShortUrl.find()
        .sort({createdAt: 1})
        .then(allUrls => res.json(allUrls))
        .catch(err => res.json(err))
});

router.post('/new', (req,res,next) => {
    ShortUrl.create(req.body)
        .then(newShortUrl => res.json(newShortUrl))
        .catch(err => res.json(err));
});

router.put('/:id', (req,res,next) => {
    ShortUrl.findByIdAndUpdate(req.params.id, req.body, { new: true})
        .then(updatedUrl => res.json(updatedUrl))
        .catch(err => res.json(err));
});

router.delete('/:id', (req,res,next) => {
    ShortUrl.findByIdAndDelete(req.params.id)
        .then(deletedUrl => res.json({deleted: true, deletedUrl}))
        .catch(err => res.json(err));
});

module.exports = router;