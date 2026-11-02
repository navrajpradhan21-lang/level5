import express from "express";
import dotenv from "dotenv"
dotenv


const app = express();
const port = process.env.PORT || 5000

app.get("/health",(req,res)=>{
    return res.status(200).json({message:"all is good"})
})

app.get("/",(req,res)=>{
    return res.status(200).json({message:"Hello Navraj"})
})

app.listen(port,()=>{
    console.log(`Server started ${port}`)
})