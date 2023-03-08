const fs = require('fs/promises');
const path = require('path');
const chalk = require('chalk')

const notesPath = path.join(__dirname, 'db.json');
async function addNote(title){
    const notes = await getNotes();
    const note = {
        title,
        id: Date.now().toString()
    }
    notes.push(note);
    await fs.writeFile(notesPath, JSON.stringify(notes))
    console.log(chalk.green("new note was added"));
}
async function getNotes(){
    const notes = await fs.readFile(notesPath, {encoding: "utf-8"});
    return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : []
}
async  function printNotes(){
    const notes = await getNotes();
    notes.forEach((note)=> console.log(chalk.red(note.id, note.title)))
}
async function deleteNotes(id){
    const notes = await getNotes();
    const newNotes = notes.filter((note) => note.id !== id.toString())
    await fs.writeFile(notesPath, JSON.stringify(newNotes))
}
async function editNotesById(id,title){
    const notes = await getNotes();
    const editNoteIndex = notes.findIndex((note) => note.id === id);
    if (editNoteIndex !== -1){
        notes[editNoteIndex].title = title;
        await fs.writeFile(notesPath, JSON.stringify(notes))
        console.log(chalk.green("title hes been changed"));
    } else {
        console.log(chalk.red(`note with id:${id} dont found`));
    }

}


module.exports = {
    addNote,
    printNotes,
    deleteNotes,
    editNotesById
};
