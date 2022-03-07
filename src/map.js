function map(list, iteratee) {
    let new_list = [];
    for (let i = 0, len = list.length; i < len; i++){
        new_list.push(iteratee(list[i]));
    }
    return new_list;
}

module.exports = map;
