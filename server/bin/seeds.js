require('dotenv').config();

const mongoose = require('mongoose');
const ShortUrl = require('../models/ShortUrl');

mongoose
    .connect('mongodb://localhost:27017/MWCT', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    }).catch(err => {
        console.error('Error connecting to Mongo', err)
    });

const seeding = () => { 
    ShortUrl.deleteMany()
        .then(() => {
            let shortUrls = [
                {
                    realUrl: 'https://www.packers.com/',
                    shortCode: 'cHeads',
                    clicksNumber: 77,
                },
                {
                    realUrl: 'https://www.buccaneers.com/',
                    shortCode: 'tBrady',
                    clicksNumber: 23,
                },
                {
                    realUrl: 'https://www.chiefs.com/',
                    shortCode: 'pMat15',
                    clicksNumber: 43,
                },
                {
                    realUrl: 'https://www.buffalobills.com/',
                    shortCode: 'jAllen',
                    clicksNumber: 57,
                },
            ];

            ShortUrl.create(shortUrls).then(() => {
                console.log('All inserted!')
                process.exit(0);
            });
        });
};

seeding();