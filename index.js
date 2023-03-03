const yargs = require('yargs');

const {addNote, printNotes} = require('./notes.controller');


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
        addNote(title);
    }
})
yargs.command({
    command: "list",
    describe: "prints all notes",
    async handler () {
        await printNotes();
    }
})
yargs.parse();