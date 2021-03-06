const filter = require('./filter')
const map = require('./map')
const bvalue = require('./bvalue')
const find = require('./find')
const bmatch = require('./bmatch')
const findIndex = require('./findIndex')
const some = require('./some')
const every = require('./every')

console.log(filter([1,2,3], (val)=> val>2))

console.log(map([1,2,3], (val)=> val**2))

console.log(bvalue('a')({a:'hi', b:'hello'}))

const users = [{age: 10}, {age: 40}];
console.log(
    map(
        filter(users, (user)=> user.age <30),
        bvalue('age')
    )
)

console.log(
    find(users, (user) => user.age === 10)
)

console.log(
    find(users, bmatch({age: 10}))
)

console.log(
    findIndex(users, bmatch({age:10}))
)

console.log(
    some([0,1])
)

console.log(
    every([0,1])
)
