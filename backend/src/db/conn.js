const mongoose = require("mongoose")
mongoose.set('strictQuery', false);

const db = "mongodb+srv://masterak9918:wNB7PKI7E4fS6aCa@cluster0.5gzxpjt.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(db).then(() => console.log("connection succesfull")).catch((err) => console.log(err));