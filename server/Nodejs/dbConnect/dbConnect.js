const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () =>{
    mongoose.connect(process.env.DB_URL)
    .then( () =>{
        console.log(`Sucuessfully Connected with Db ${process.env.PORT}`);
    })
    .catch( () =>{
        console.log("Failed to Connect with DB");
    })
};

module.exports = dbConnect;