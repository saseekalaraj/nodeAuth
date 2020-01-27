//Using some libraries
const express = require('express')
const app = express()
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
//import other imporatant files
//const user= require('../models/User')
const PORT = process.env.PORT || 8080
dotenv.config();
const token = require('../router/auth')
const myOwnMiddleware = (req, res, next) => {
    console.log("Middleware Applied");
    next();
};
app.use(bodyParser.json());
app.use(myOwnMiddleware);
app.use(morgan('dev'))
app.use(cookieParser());
app.use(cors());
app.use(token)
app.listen(PORT, err => {
    if (err) return console.log(`Cannot Listen on PORT: ${PORT}`);
    console.log(`Server Listening on: http://localhost:${PORT}`);
});