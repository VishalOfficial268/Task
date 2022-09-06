const mongoose = require('mongoose');
const db_url = process.env.DB_URL || "mongodb://127.0.0.1:27017/";

mongoose.connect(db_url).then(() => {
    console.log("db connected...")
}).catch(console.log);