// const arr = [1,2,3,4,5,6,7]
// const arr1 = [1,2,3,4,5,6]

// const sevenBoom = arr => arr.includes(7) ? 'boom' : 'NO'

// console.log(sevenBoom(arr))

const obj1 = { a: "hello" , b : 'hi' , c : {d : 'hey'}}

const obj2 = {... obj1}

// const {a} = obj1
// console.log(a)

obj2.c.d = "NOOO"

console.log(obj1)
console.log(obj2)


