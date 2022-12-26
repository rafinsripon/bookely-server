const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();


// middlewares
app.use(cors());
app.use(express.json());

async function run(){
    try{
        console.log("Database Connected perfect");
    }finally{

    }
}
run().catch(error => console.log(error));




//default setup
app.get("/", (req, res) => {
    res.send("Bookely - server is running on port")
})

app.listen(port, () => {
    console.log(`server is runnig on ${port}`)
})
