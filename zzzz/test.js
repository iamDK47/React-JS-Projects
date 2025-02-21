// const person = {
//  firstName: "John",
//  lastName: "Doe",
//  id: 5566,
//  fullName : function() {
//    return this.firstName + " " + this.lastName;
//  }
// };

// // Display data from the object:
// console.log(person.fullName())

// const person = {
//  firstName  : "John",
//  lastName   : "Doe",
//  id     : 5566,
//  myFunction : function() {
//    return this.firstName + '' + this.lastName;
//  }
// };
// const person = {
//  firstName  : "John",
//  lastName   : "Doe",
//  id     : 5566,
//  myFunction : function() {
//    return this;
//  }
// };

// Display data from the object:
// console.log(person.myFunction())

// const p = {
//  firstName : "han",
//  lastName : "zimmer"
// }

// console.log(person.myFunction.bind(p))
// console.log(person.myFunction.call(p))

// const obj = {
//  someKey: 1, 
//  outer: function() {
//     function inner(){
//       console.log(this);
//    }     
//    inner()
//  },
// }

// obj.outer();     

// setTimeout(() => {
//  console.log('hello')
// }, 3000);

function getUser(userId, callback) {
 setTimeout(() => {
   console.log("User fetched");
   callback({ id: userId, name: "Alice" });
 }, 1000);
}

function getOrders(user, callback) {
 setTimeout(() => {
   console.log("Orders fetched");
   callback(["Order 1", "Order 2"]);
 }, 1000);
}

function getOrderDetails(order, callback) {
 setTimeout(() => {
   console.log("Order details fetched");
   callback({ details: "Details of " + order });
 }, 1000);
}

// ❌ Nested callbacks (Callback Hell)
// getUser(1, (user) => {
//  getOrders(user, (orders) => {
//    getOrderDetails(orders[0], (details) => {
//      console.log(details);
//    });
//  });
// });

getUser(1,() => getOrders(1, () => getOrderDetails(1 , () => console.log('lol'))))