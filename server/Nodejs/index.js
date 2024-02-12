const express = require("express");
const cors = require('cors');
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

let PORT = process.env.PORT || 4000;

try {
    app.listen(PORT, () => {
        console.log("Successfully Connected to PORT");
    })
} catch {
    console.log("Error Occurred while Assigning PORT Number")
}

const dbConnect = require("./dbConnect/dbConnect")
dbConnect();

const routes = require("./routes/user");
app.use("/api/v1", routes);
