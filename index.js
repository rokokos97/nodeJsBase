const yargs = require('yargs')
// const pkg = require('./package.json')
const {addNote, getNotes} = require('./notes.controller')

yargs.command({
    command: "add",
    describe: "add new note to list",
    builder: {
        title: {
            type: "string",
            describe: "note title",
            demandOption: true
        }
    },
    handler ({title}) {
        // console.log("add command", title);
        addNote(title);
    }
})
yargs.command({
    command: "list",
    describe: "prints all notes",
    handler () {
        // console.log("list command");
        const notes = getNotes();
        console.log(notes);
    }
})
yargs.parse();