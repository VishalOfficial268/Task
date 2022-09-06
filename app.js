const express = require("express");
const PORT = 3500;
const app = express();
require('dotenv').config();




//server listening:
app.listen(PORT, () => {
    console.log(`server listening at port: ${PORT}`);
})