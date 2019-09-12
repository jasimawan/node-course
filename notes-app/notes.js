const fs = require('fs');
const chalk = require('chalk');


const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.green.inverse('Your Notes'))
    notes.forEach(note => {
        console.log(note.title)
    });
}

const addNote = (title, body) => {
    const notes = loadNotes();
    //const duplicateNotes = notes.filter( (note) =>  note.title === title );
    const duplicateNoteSingular = notes.find((note) => note.title === title);

    debugger

    if(!duplicateNoteSingular){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'))
    }else {
        console.log(chalk.red.inverse('Note title already exists'));
    }
    
}

const readNote = (title) => {
    const notes = loadNotes();
    const searchNote = notes.find((note) => note.title === title);

    if(searchNote){
        console.log(chalk.green.inverse(searchNote.title));
        console.log(searchNote.body);
    }else {
        console.log(chalk.red.inverse('Note with such title does not exist.'));
    }
}

const removeNote = (title) =>  {
    const notes = loadNotes();
    const notesToKeep = notes.filter( (note)  => note.title !== title )
    
        if(notes.length > notesToKeep.length){
        saveNotes(notesToKeep);
        console.log(chalk.green.inverse('Note Removed'));
        } else {
            console.log(chalk.red.inverse('Note not exist'));
        }
}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try{
        const dataBuffer  = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch (e){
        return []
    }  
}

module.exports ={ 
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes, 
    readNote:readNote 
};