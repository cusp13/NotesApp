const notes = require ('./notes.js')
const yargs = require('yargs');
const chalk = require('chalk')
yargs.version('1.1.0');
const { demandOption, argv } = require('yargs');
const { readNotes } = require('./notes.js');


// create add command...
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'njdbkjbkc',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv){
       notes.addNote(argv.title , argv.body)
    }
})


// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder : {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})


// list notes....
yargs.command({
    command: 'list',
    describe: 'List a Note',
    handler(){
        notes.listNotes();
    }
})


//  read command....
yargs.command({
    command: 'read',
    describe: 'read a Note',
    builder : {
        title: {
            describe: 'read list',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
       notes.readNotes(argv.title);  
    }
})
console.log(yargs.argv);