require('dotenv').config();
const express = require("express");
const morgan = require('morgan');
const cors = require('cors');
const orderRoute = require("./routes/orders");
const PORT = process.env.PORT || 3500;
const app = express();


//db config and setup:
require('./config/db-config');

//for log in the console:
app.use(morgan('dev'));

//middleware:
app.use(express.json());
app.use(cors());


//routes middleware:
app.use('/orders', orderRoute);


//default landing page as home page:
app.get('/', (req, res) => {
    res.send("REST API for Order (Task)");
})


// middleware handling:
app.use((error, req, res, next) => {
    console.log(error);
    res.status(500).send(error);
})

//server listening:
app.listen(PORT, () => {
    console.log(`server listening at port: ${PORT}`);
})