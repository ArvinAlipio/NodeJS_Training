// built in Node module
const fs = require('fs'); 

//installed using NPM install
const _ = require('lodash'); 

//required file to use exported functions inside file
const notes = require('./notes')

var command = process.argv[2];
console.log('Command:', command);

if (command == 'add') {
    console.log('Adding new note');
} else if (command == 'list') {
    console.log('Listing all notes');
} else if (command == 'read') {
    console.log('Fetching note');
} else if (command == 'remove') {
    console.log('Removing note');
} else {
    console.log('Command not found');
}








//====================================================================
//Back up notes.
// const os = require('os');  
// var user = os.userInfo(); 


// //Lodash notes
// console.log(_.isString(true)); 
// console.log(_.isString('Arvin'));

// var filteredArray = _.uniq(['Arvin', 1, 'Arvin', 1, 2, 3, 4]);
// console.log(filteredArray); 

// //Requiring files and exporting functions from other files
// var res = notes.addNote();
// console.log(res);

// var addTest = notes.add(1, 1);
// console.log(addTest);

// //Using built in modules
// console.log(user);

// fs.appendFile('greetings.txt', `Hello ${user.username}, you are ${notes.age}`, function (err) {
//     if (err) {
//         console.log('Unable to write to file');
//     }
// });