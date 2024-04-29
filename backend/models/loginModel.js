const mongoose = require('mongoose');

const loginSchema = mongoose.Schema(
    {
        email:{
            type:String,
            required:[true,"Enter an email address"]
        },

        password:{
            type:String,
            required:[true,"Enter password"]
        },

        admin:{
            type:String,
            required:[true,"Enter admin status"]
        }
    }
)

module.exports = mongoose.model("Login",loginSchema);