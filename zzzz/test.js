const myObj = {
 a: 7,
 get b() {
   return a + 1;
 },
 set c(x) {
   a = x / 2;
 },
};

console.log(myObj.a); 
console.log(myObj.b); 
// myObj.c = 50; 
// console.log(myObj.a); 
