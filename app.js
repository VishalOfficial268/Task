const express = require("express");
const morgan = require('morgan');
const cors = require('cors');
const PORT = 3500;
const app = express();
require('dotenv').config();

//db config and setup:
require('./config/db-config');

//for log in the console:
app.use(morgan('dev'));

//middleware:
app.use(express.json())
app.use(cors());


//server listening:
app.listen(PORT, () => {
    console.log(`server listening at port: ${PORT}`);
})