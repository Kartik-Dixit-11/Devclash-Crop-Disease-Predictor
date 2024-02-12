const express = require("express");
const router = express.Router();


    const {login,signUp} = require("../controller/auth");
    const {auth,isStudent,isAdmin} = require("../middleware/middleware_auth");


    router.post("/signUp", signUp);
    router.post("/login",login);


module.exports = router;