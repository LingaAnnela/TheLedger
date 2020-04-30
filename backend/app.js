const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const clientRoutes = require('./routes/clients.route');
const userRoutes = require('./routes/user.route');

//Needs to be configured
const MONGO_ATLAS_PW = 'Quest2019@';

// mongoose.connect('mongodb+srv://LingaAnnela:'+ MONGO_ATLAS_PW +'@cf-cluster-b9swh.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });
mongoose.connect('mongodb+srv://LingaAnnela:Yotta2020@theledger-cluster-wdmvz.mongodb.net/theledger?retryWrites=true&w=majority', { useNewUrlParser: true });

mongoose.Promise = global.Promise;

// To log the incoming reqest!
app.use(morgan('dev'));
//To access the images in the uploads folder, there are two way to hangle
//1. use a get call on the uploads folder, search for the request and respond.
//2. we could make the folder statics --> to be accessed to everyone
app.use('/uploads',express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//Middleware!!
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    if(req.method === 'OPTIONS'){
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
        return res.status(200).json({});
    }
    next();
});

//Incoming routes to be handled!
app.use('/api/clients', clientRoutes);
app.use('/api/user', userRoutes);

//Invalid incoming request!
app.use((req, res, next) => {
    const error = new Error('Not found.');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error : {
            message : error.message
        }
    });
});

module.exports = app;