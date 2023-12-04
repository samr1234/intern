const express = require('express')
const app=express();
const port =3000;
const mongoose = require("mongoose")
require('dotenv').config();
const cors = require('cors');

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("connected to mongo");
    app.listen(()=>{
        console.log("server started on port 3000");
    })
}).catch(err=>{
    console.log(err);
})
app.use(express.json());

const User = require('./Routes/user')


app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

app.use(User)

app.get("/",(req,res)=>{
    res.send("hello")
})


app.listen(port,()=>{
    console.log("server is listening at port 3000")
})

