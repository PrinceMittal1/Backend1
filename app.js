require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.get('/', (req, res) =>{
    res.send("got the first commad")
})

app.get('/login', (req, res) =>{
    res.send('<h1>ruk krte h login</h1>')
})

app.listen(port, () =>{
    console.log(`port started at ${port}`)
})