const fs = require('fs')

// Synchronous Read

console.log('start reading Synchronous file...')
let content 
try {
    content = fs.readFileSync('app/file.md', 'utf-8')
}
catch (ex) {
    console.log(ex)
}
console.log(content)
console.log('end reading Synchronous file...')


// Higher Order function example
// Functions that can take other functions as arguments are called higher-order functions.
const numbers = [2,4,1,5,4]

function isBiggerThanTwo(num) {
    return num > 2
}

// higher-order function = filter
const filterdNumbers = numbers.filter(isBiggerThanTwo)

console.log(`Original Numbers : ${numbers}`)
console.log(`Filtered Numbers : ${filterdNumbers}`)

// Asynchronous Read
console.log('start reading Asynchronous file...')
fs.readFile('app/file.md', 'utf-8', function(err, content){
    if (err) {
        return console.log(err)
    }
    console.log(content)
})
console.log('end reading Asynchronous file...')


// Problem : Callback Hell  Solution: Async.js
async.parallel(['file1', 'file2', 'file3'], fs.stat, function
(err, results) {
})