const express = require('express');
const connectToDb = require('./utils/dbConnection');

const port = 3000 || process.env.PORT;

const app = express();

app.get('/', (req,res)=>{
    res.status(200).send({message:"You reached Remora backend"})
});

app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`)
    connectToDb();
});