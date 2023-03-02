const yargs = require() ('yargs')

yargs.command({
    command: "add",
    describe: "add new note to list",
    handler () {
        console.log("add command");
    }
})
yargs.command({
    command: "list",
    describe: "prints all notes",
    handler () {
        console.log("list command");
    }
})