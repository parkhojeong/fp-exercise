// function object(key, val) {
//     let obj = {};
//     obj[key] = val;
//     return obj;
// }
function match(obj, obj2) {
    for(let key in obj2){
        if(obj[key] !== obj2[key]) return false;
    }
    return true
}
function bmatch(obj2, val) {
    // if(arguments.length == 2) obj2 = object(obj2, val);
    return (obj) => match(obj, obj2);
}

module.exports = bmatch;
