const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req,res,next) =>{
  try{  
    const token = req.body.token 
     || req.cookies.token 
     || req.header("Authorization").replace("Bearer ","")

    if(!token || token === undefined){
        return res.status(401).json({
            sucuess:false,
            message:"Token not Found"
         })
    }

    try{
        // JWT verify method is used for verify the token the take 
        // two arguments one is token string value, and second one 
        // is secret key for matching the token is valid or not. 
        // The validation method returns a decode object that we stored the token in.
        const decode = jwt.verify(token,process.env.JWT_QUERY);
        console.log(decode);

        req.user = decode;
        
    }catch{
        return res.status(401).json({
            sucuess:false,
            message: "Unable to verify the Token"
        })
    }
    

 } catch(err) {
    console.log(err)
        return res.status(401).json({
            success: false,
            message: "Something went wrong while verifying token"
        })
 }
 
 next();
};

exports.isStudent = (req,res,next) =>{

 try{
    if(req.user.role !== "Student"){
        return res.status(401).json({
            sucuess:false,
            message:"It's Protected Only for Students"
        })
    }

    next();
} catch{
    return res.status(500).json({
        sucuess:false,
        message:"Role Didn't Matched"
    })
}
}



exports.isAdmin = (req,res,next) =>{

    try{
       if(req.user.role !== "Admin"){
           return res.status(402).json({
               sucuess:false,
               message:"It's Protected Only for Admin"
           })
       }

       next();
   } catch{
       return res.status(500).json({
           sucuess:false,
           message:"Role Didn't Matched"
       })
   }
   }