const express = require('express')
const mongoose = require('mongoose')
const dbConnection = async() =>{
    const DBconnection = await mongoose.connect(process.env.DB_URI)
    .then((DBconnection)=>
        console.log(`DATABASE CONNECTED SUCCESSFULLY AND LISTENING TO ${DBconnection.connection.port}`)
    )
.catch((err)=>console.log(`error connecting to DB:${err}`))
}

module.exports = dbConnection;