const express=require('express');
require('./models/index')
const port=5000;
const app=express();


app.get('/',(req,res)=>{
    res.send("Hello")
});

app.listen({port},()=>{
    console.log("Running on port ",{port})
})