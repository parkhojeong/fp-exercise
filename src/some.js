const find = require('./find')
const identity = require('./identity')

function some(list) {
    return !!find(list, identity)
}

module.exports = some;
