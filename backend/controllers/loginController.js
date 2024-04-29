const loginModel = require('../models/loginModel')
const asyncHandler = require('express-async-handler');

const loginController = asyncHandler(async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        res.status(400).json({"message":"Email or Password is empty"})
    }
    else{
    const data = await loginModel.findOne({email})
    console.log(data)
    if(data){

        if(password === data.password){
            res.status(200).json({email,password,admin:data.admin})
        }

        else{
            res.status(401).json({message:"Incorrect Password"})
        }

       
    }
    else{
        res.status(401).json({"message":"YOU ARE NOT REGISTERED"})
    }
    }
})

module.exports = loginController