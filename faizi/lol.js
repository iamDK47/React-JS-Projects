// const array = ['a', 'b', 'c', 'd', 'c', 'c', 'b']

// const obj = {}

// function lol() {
//  for (let i = 0; i < array.length; i++) {
//   const element = array[i];
//   obj[element] = obj[element] ? obj[element] + 1 : 1  
//  }
//  console.log(obj)
// }
// lol()

// const array = ['a', 'b', 'c', 'd', 'c', 'c', 'b']

// const obj = {}

// function lol() {
//  for (let i = 0; i < array.length; i++) {
//   const element = array[i];
//   if(obj[element]){ obj[element] += 1} else { obj[element] = 1}
//  }
//  console.log(obj)
// }
// lol()

// const array = ['a', 'b', 'c', 'd', 'c', 'c', 'b']

// const obj = {}

// function lol() {
//  for (let i = 0; i < array.length; i++) {
//   const element = array[i];
//   obj[element] = (obj[element] || 1) + 1
//  }
//  console.log(obj)
// }
// lol()

// const array = ['a', 'b', 'c', 'd', 'c', 'c', 'b']

// const lol = array.reduce((total,element) => {
//   total[element] = (total[element] || 0) + 1
//   return total
// },{})

// console.log(lol)

const array = ['a', 'b', 'c', 'd', 'c', 'c', 'b']

  const obj = {}

function find() {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    obj[element] = Object.is(obj[element],element) ? + 1 : 1
  }
  console.log(obj)
}
find()