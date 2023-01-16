const fs = require('fs');
const { userInfo } = require('os');
// const book = {
//     title:'my name',
//     author: 'badal',
// }
// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)
// fs.writeFileSync('1-json.json',bookJSON)

// const data = JSON.parse(bookJSON)
// console.log(data.author);
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON);
const user = JSON.parse(dataJSON)
user.name = 'badal'
user.age = 56
user.author = "divyansh"

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)
console.log(data.author)
