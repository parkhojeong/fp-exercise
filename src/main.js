const filter = require('./filter')
const map = require('./map')
const bvalue = require('./bvalue')

console.log(filter([1,2,3], (val)=> val>2))

console.log(map([1,2,3], (val)=> val**2))

console.log(bvalue('a')({a:'hi', b:'hello'}))
