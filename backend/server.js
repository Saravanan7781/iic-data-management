require('dotenv').config()
const dbConnection = require('./config/dbConnection');
const router = require('./routes/loginRoute');
const express = require('express');
const server = express();
const cors = require('cors')


dbConnection();
server.use(express.json())
server.use(cors())
server.use(router)
server.listen(process.env.PORT,()=>{
    console.log(`Server is connected to ${process.env.PORT}`)
})


