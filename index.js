//Config Express
const express = require('express');
const path = require('path');
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

//Config Router/Render
app.get('/', (req, res) => res.render('login'));
app.get('/login', (req, res) => res.render('login'));
app.get('/register', (req, res) => res.render('register'));
app.get('/recover', (req, res) => res.render('recover'));
app.get('/dashboard', (req, res) => res.render('dashboard'));
app.get('/page-lockscreen', (req, res) => res.render('page/page-lockscreen'));
app.get('/profile', (req, res) => res.render('profile'));
// app.get('/blog-details.html', (req, res) => res.render('blog-details'));
app.get('/inbox', (req, res) => res.render('inbox'));
app.get('/chat', (req, res) => res.render('chat'));
app.get('/calendar', (req, res) => res.render('calendar'));
app.get('/taskboard', (req, res) => res.render('taskboard'));
app.get('/map-google', (req, res) => res.render('map-google'));

//File Manager
app.get('/file-dashboard', (req, res) => res.render('file/file-dashboard'));
app.get('/file-documents', (req, res) => res.render('file/file-documents'));
app.get('/file-media', (req, res) => res.render('file/file-media'));
app.get('/file-images', (req, res) => res.render('file/file-images'));

//HTML Status
app.get('/page-404', (req, res) => res.render('page/page-404'));
app.get('/page-403', (req, res) => res.render('page/page-403'));
app.get('/page-500', (req, res) => res.render('page/page-500'));
app.get('/page-503', (req, res) => res.render('page/page-503'));
