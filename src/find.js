function find(list, predicate) {
    for(let i = 0, len = list.length; i < len; i++){
        if(predicate(list[i], i)) return list[i];
    }
}

module.exports = find;
