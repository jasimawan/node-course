const yargs = require('yargs');
const chalk = require('chalk');
const note = require('./notes');

yargs.version('1.1.0');

//add
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demand: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demand: true, 
            type: 'string'
        }
    },
    handler(argv) {
        note.addNote(argv.title, argv.body);
    }
})

//remove
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder: {
        title: {
            describe: 'Note title',
            demand: true,
            type: 'string'
        }
    },
    handler(argv) {
        note.removeNote(argv.title);
    }
})

//read
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder: {
        title: {
            describe: 'Note title',
            demand: true,
            type: 'string'
        }
    },
    handler(argv) {
        note.readNote(argv.title);
    }
})

//list
yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler() {
       note.listNotes();
    }
})

yargs.parse();








// const add = require('./utils');
// const sum = add(4, -2);
// console.log(sum);
