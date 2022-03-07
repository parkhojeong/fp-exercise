const findIndex = require('./findIndex')
const not = require('./not')
const beq = require('./not')

function every(list) {
    return beq(-1)(findIndex(list, not))
}

module.exports = every;
