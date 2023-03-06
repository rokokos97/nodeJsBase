const chalk = require('chalk');
const port = 3000;
const path = require('path');
const express = require('express');
const {addNote, getNotes, removeNote} = require('./notes.controller');

const app = express();


app.set('view engine', 'ejs');
app.set('views', 'pages');

app.use(express.static(path.resolve(__dirname,'public')))
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
app.delete('/:id', async (req, res)=>{
    console.log("id", req.params.id)
    await removeNote(req.params.id);
    res.render('index', {
        title : 'Express app',
        notes: await getNotes(),
        created: false,
    });

})
app.listen(port,()=>{
    console.log(chalk.green(`Server hes been started`))
})