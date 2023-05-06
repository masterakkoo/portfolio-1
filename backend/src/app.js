
const express = require("express")
const app = express();
const mongoose = require("mongoose");
const port = 4000;
const Merndata = require("./models/register")
require("./db/conn")

app.get("/", (req, res) => {
    res.send("HEllo there")
})
app.use(express.json())
// app.use('./api', require("./routes/newregister"))
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next()
})

app.post("/register", async (req, res) => {
    const { fname, lname, email, subject, message } = req.body;
    try {

        const rest = await Merndata.create({ fname, lname, email, subject, message });
        console.log(rest)
        return res.json({ success: true, message: "data posted" })
    }
    catch (err) {
        console.log("error")

        return res.json({ success: false, message: "data req denied" })
    }
})
app.listen(port, () => {
    console.log("listeing to the port at 4000")
})