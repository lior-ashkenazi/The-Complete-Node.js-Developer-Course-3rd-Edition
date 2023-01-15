const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes')

const msg = getNotes()
console.log(msg);

console.log(validator.isURL('https:/mead.io'));

console.log(chalk.blue.inverse.bold("Success!"));