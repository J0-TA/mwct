const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { nanoid } = require('nanoid');

const shortUrlSchema = new Schema({
    realUrl: {
        type: String,
        required: true,
    },
    shortCode: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxlength: 6,
        minlength: 4,
        default: nanoid(6),
    },
    clicksNumber: {
        type: Number,
        required: true,
        min: 0,
        default: 0,
    }
}, {
    timestamps: true
});

const ShortUrl = mongoose.model('ShortUrl', shortUrlSchema);
module.exports = ShortUrl;