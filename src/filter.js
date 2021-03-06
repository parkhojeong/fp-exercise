const filter = (list, predicate) => {
  let new_list = [];
  for(let i = 0, len = list.length; i < len; i++){
      if(predicate(list[i],i)) new_list.push(list[i]);
  }
  return new_list;
}

module.exports = filter;
