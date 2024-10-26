const express = require("express");
const mongoose = require("mongoose");
const cookieParser =require("cookie-parser");
const cors = require("cors")



const app = express()
const PORT = process.env.PORT || 5000
mongoose.connect("mongodb+srv://bimaldev707:Bimal%402001@cluster0.qedlv.mongodb.net/")
.then(()=> console.log("Mongo DB connected"))
.catch(()=>console.log(error))



app.use(cors ({
    origin:'http://localhost:5173/',
    methods:['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders:[
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma"
    ],
    credentials:true
}))


app.use(cookieParser());
app.use(express());
app.listen(PORT, () => console.log(`server is running in port ${PORT}`)
)