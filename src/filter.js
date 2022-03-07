const filter = (list, predicate) => {
  let new_list = [];
  for(let i = 0, len = list.length; i < len; i++){
      if(predicate(list[i])) new_list.push(list[i]);
  }
  return new_list;
}


const res = filter([1,2,3], (val)=> val>2);
console.log(res)
