const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/product402');

const userSchema = new mongoose.Schema({
    email: String,
    age: Number
});

const user = mongoose.model('user',userSchema);

user.create({
    email: "namntph06792@fpt.edu.vn",
    age: 30
})