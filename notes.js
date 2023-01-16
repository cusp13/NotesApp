const { default: chalk } = require('chalk');
const fs = require('fs')

//GET NOTES...
const getNotes = () => {
    return "Your Notes...";
 }

// ADD NOTES...
 const addNote = (title,body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note)=>note.title===title)
     if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
            saveNotes(notes);
            console.log(chalk.greenBright.bgCyan('new note added'))
        } 
        else{
            console.log(chalk.underline('note title taken!'));
        }
    }

// REMOVE NOTES.....
    const removeNote = function(title){
          const notes = loadNotes()
          const dnotes = notes.filter(function (note){
            return  note.title!==title
    })
    if(dnotes.length!==0){
        saveNotes(dnotes);
       console.log(chalk.green.bgCyan('Notes removed'));
    }
    else{
        console.log(chalk.red.bgWhite('no note found'));
        }
    }

// LIST NOTES....
    const listNotes =()=>{
        const notes = loadNotes();
        console.log(chalk.red('Your Notes...'));
        notes.forEach((note) => {
              console.log(note.title);
        })
    }

// READ NOTES...
const readNotes = (title) =>{
    const notes = loadNotes();
    const note = notes.find(function(note){
       return note.title===title;
    })
    if(note){
        console.log(chalk.red.bgBlackBright(note.body));
    }
    else{
        console.log('note not found');
    } 
}

// SAVE NOTES..
 const saveNotes = (notes)=>{
     const dataJSON = JSON.stringify(notes);
     fs.writeFileSync('notes.json',dataJSON)
 }

// LOAD NOTES...
   const loadNotes =()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
     }
   }

 module.exports = {
    getNotes:  getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
 }