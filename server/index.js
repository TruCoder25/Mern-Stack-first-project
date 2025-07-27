
const express = require('express');

require("./database")

const app = express(); 


app.use('/api',(req,res)=>{
    res.status(200).json({message:"hello express"})
})

app.listen(5000,()=>console.log("App is running at port /5000"))
