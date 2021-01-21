const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueString = require('unique-string');

const shortUrlSchema = new Schema({
    realUrl: {
        type: String,
        required: true,
    },
    shortCode: {
        type: String,
        required: true,
        unique: true,
        default: uniqueString().slice(0, 5),
    },
    clicksNumber: {
        type: Number,
        required: true,
        default: 0,
    }
}, {
    timestamps: true
});

const ShortUrl = mongoose.model('ShortUrl', shortUrlSchema);
module.exports = ShortUrl;