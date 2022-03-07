function findIndex(list, predicate) {
    for(let i = 0, len = list.length; i<len; i++){
        if(predicate(list[i], i)) return i;
    }
    return -1;
}

module.exports = findIndex;
