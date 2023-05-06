const mongoose = require("mongoose");
// const validator = require('validator');
mongoose.set('strictQuery', false);

const list = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    subject: String,
    message: String
});


const Merndata = new mongoose.model("Merndata", list);
module.exports = Merndata;