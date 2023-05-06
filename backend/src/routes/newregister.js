const express = require("express")
const router = express.Router();
const Merndata = require("../models/register")
router.post("/contact", async (req, res) => {
    try {
        const rest = await Merndata.create({
            fname: " Akash",
            lname: "Verma",
            email: "masterak9918@gmail.com",
            subject: "complain",
            message: "please contact me as soon as possible"
        }
        );
        console.log(rest)
        res.send("data posted")
    }
    catch (err) {
        console.log("error")

        res.send("data req denied")
    }
})

module.exports = router;