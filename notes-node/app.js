// built in Node module
const fs = require('fs'); 
const os = require('os');  

//installed using NPM install
const _ = require('lodash'); 

//required file to use exported functions inside file
const notes = require('./notes')

var user = os.userInfo(); 


//Lodash notes
console.log(_.isString(true)); 
console.log(_.isString('Arvin'));

var filteredArray = _.uniq(['Arvin', 1, 'Arvin', 1, 2, 3, 4]);
console.log(filteredArray); 

//Requiring files and exporting functions from other files
var res = notes.addNote();
console.log(res);

var addTest = notes.add(1, 1);
console.log(addTest);

//Using built in modules
console.log(user);

fs.appendFile('greetings.txt', `Hello ${user.username}, you are ${notes.age}`, function (err) {
    if (err) {
        console.log('Unable to write to file');
    }
});