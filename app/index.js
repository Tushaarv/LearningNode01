const calc = require('./calc')
const readline = require('readline')

const numbersToAdd = [
    3,
    4,
    10,
    2
]

// #1 Normal Adding Numbers from the the Array
// const result = calc.sum(numbersToAdd)
// console.log(`The result is: ${result}`)


// Adding number based on user input
const numbersToAddFromUser = []

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Read Number 1
rl.question('Enter Number 1: ', (answer) => {
    numbersToAddFromUser.push(parseInt(answer))
    // Read Number 2
    rl.question('Enter Number 2: ', (answer) => {
        numbersToAddFromUser.push(parseInt(answer))
        // Calculate Sum
        const result = calc.sum(numbersToAddFromUser)
        console.log(`The result is: ${result}`)
        rl.close
        // Exit Readline Terminal
        process.stdin.destroy();
    })
})
