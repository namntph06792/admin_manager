//Config Express
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const commonRouter = require('./routers/common-router');
const productRouter = require('./routers/product-router');
const app = express();

app.use(express.static(__dirname));

//Config EJS
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('views', './views');

//Config Multer
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
var upload = multer({ storage: storage });

//Start server
const port = process.env.PORT || '3000';
app.listen(port, () => console.log(`Running on localhost:${port}`));


//Set up default mongoose connection
var mongoDB = 'mongodb://localhost:27017/product402';
mongoose.connect(mongoDB, {
        useNewUrlParser: true
    })
    .catch(error => handleError(error));

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Config Router/Render
app.use(commonRouter);
app.use(productRouter);
//Redirect if page not found
app.get('*', (req, res) => res.status(404).render('page/page-404'));


