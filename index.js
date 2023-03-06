const http = require('http');
const chalk = require('chalk');
const fs = require('fs/promises');
const path = require('path');
const port = 3000;
const basePath = path.join(__dirname, "pages");
const express = require('express');
const {addNote} = require('./notes.controller');

const app = express();

app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res)=>{
    res.sendFile(path.join(basePath, 'index.html'))
})
app.post('/', (req, res)=>{
    console.log(req.body)
    res.sendFile(path.join(basePath, 'index.html'))
})
app.listen(port,()=>{
    console.log(chalk.green(`Server hes been started`))
})