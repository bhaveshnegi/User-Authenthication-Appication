const express = require('express');
const app = express();
const port = 8000;
const connectDB=require('./db/dbConnection');
const User = require('./db/user');

connectDB();

app.use(express.json());

app.post('/register',async(req,res)=>{
    try {
        const {username,password}=req.body;
        console.log(req.body)
        const user = new User({username,password});
        await user.save();
        res.status(201).json({message:'Registration Successfully'})
    } 
    catch{
        res.status(500).json({error:'Registration Failed'});
    }
})

//login

app.post('/login',async(req,res)=>{
    try {
        const {username,password}=req.body;
        const user = await User.findOne({username});
        if(!user){
            return res.status(401).json({error:'Invalid Username or Password'});
        }
        if(user.password !== password){
            return res.status(401).json({error:'Invalid Password'});
        }
        res.status(200).json({message:'Login Successfully'});
    } 
    catch (error) {
        res.status(500).json({error:'Login Failed'});
    }
})
app.listen(port,()=>{
    console.log('Server is listening on Port http://localhost/8000');
})