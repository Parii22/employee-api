const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://2025parip_db_user:xs6TYeDNttQr2vq7@itm.qrldvvz.mongodb.net/?appName=ITM")

const db = mongoose.connection;

db.on("connected",()=>{
console.log("MongoDB successfully connected")
});

db.on("disconnected",()=>{
console.log("MongoDB disconnected")
});

db.on("error",(error)=>{
console.log("MongoDB connection error:" ,error);
});

module.exports = db;