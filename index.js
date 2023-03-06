const http = require('http');
const chalk = require('chalk');
const fs = require('fs/promises');
const port = 3000;
const express = require('express');
const {addNote, getNotes} = require('./notes.controller');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'pages');

app.use(express.urlencoded({ extended: true }))
app.get('/', async (req, res)=>{
    res.render('index', {
        title : 'Express app',
        notes: await getNotes(),
        created: false,
    });
})
app.post('/', async (req, res)=>{
    await addNote(req.body.title);
    res.render('index', {
        title : 'Express app',
        notes: await getNotes(),
        created: true,
    });
})
app.listen(port,()=>{
    console.log(chalk.green(`Server hes been started`))
})