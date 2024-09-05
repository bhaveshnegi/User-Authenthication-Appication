const express = require('express');
const app = express();
const port = 8000;
const connectDB=require('./db/dbConnection')

connectDB();

app.listen(port,()=>{
    console.log('Server is listening on Port http://localhost/8000');
})