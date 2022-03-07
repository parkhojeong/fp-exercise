function map(list, iteratee) {
    let new_list = [];
    for (let i = 0, len = list.length; i < len; i++){
        new_list.push(iteratee(list[i]));
    }
    return new_list;
}

const res = map([1,2,3], (num)=> num**2);
console.log(res)
