function beq(a) {
    return function (b) {
        return a === b;
    }
}

module.exports = beq;
