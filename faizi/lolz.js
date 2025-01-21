// const arr = [4, 5, 6, 7]

// const sum = arr.reduce((res,element) => {
//  return res + element
// },)

// console.log(sum)

const numbers = [1, 2, 3, 4];

// const forEachResult = numbers.forEach(num => {
//     console.log(num * 2);
    
//     return num * 2;
//    });
//    console.log(forEachResult); 

const mapResult = numbers.map(num => {
    return num * 2;
});
console.log(mapResult); 