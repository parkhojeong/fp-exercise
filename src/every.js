const filter = require('./filter')
const identity = require('./identity')

function every(list) {
    return filter(list, identity).length == list.length;
}

module.exports = every;
