const bcrypt = require("bcrypt");
const User = require("../model/User");
const jwt = require("jsonwebtoken")


require("dotenv").config();

exports.signUp = async (req,res) =>{
    
    try{

        console.log("inside the request")
        const {name,email,password,role} = req.body;
        console.log("name is ",name);
        const existingUser = await User.findOne({email});

    if(existingUser){
        return res.status(400).json({
            sucuess:false,
            message:"Already User Exists"
        })
    }

    let hashedPassword;

    try{
        hashedPassword = await bcrypt.hash(password,10);
        console.log("Hashed Pass created Sucuess")
    }
    catch(err){
        return res.status(500).json({
            sucuess:false,
            message:"Didn't able to Create Password"
        })
    }

    let user = await User.create({name,email,password:hashedPassword,role});

    return res.status(200).json({
        sucuess:true,
        message:"Sucuessfully created your Account",
        data: user
    });

    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            sucuess:false,
            message:"Unable to Creat Your Account"
        })
    }
}



exports.login = async(req,res) =>{
 
  try{  
    const {email,password} = req.body;
    console.log(email);

    // empty

    if(!email || !password){
        return res.status(400).json({
            sucuess:false,
            message:"Fill the Details"
        })
    }

    let user = await User.findOne({email});

    if(!user){
        return res.status(401).json({
            sucuess:false,
            message:"User Not Registered"
        })
    }

    const payload = {
        email:user.email,
        id: user._id,
        role: user.role
    }

    if(await bcrypt.compare(password,user.password))
    {
        // jwt.sign is used to create the token
        let token = jwt.sign(payload,process.env.JWT_QUERY,{
            expiresIn:"2h"
        })

        user = user.toObject();
        user.token= token;
        user.password= undefined;

        const option = {
            expires: new Date(Date.now() + 10*24*60*60*1000),
            // httpOnly:true
        }

         res.cookie("token",token,option).status(200).json({
            sucuess:true,
            token,
            user,
            message:"User logged in successfully"
        })
    }
    else{
        return res.status(403).json({
            sucuess:false,
            message:"Password Didn't Match "
        })
    }
 } catch(err){
    console.error(err);
    return res.status(500).json({
    sucuess:false,
    message:"Login False"
   })
 }
}