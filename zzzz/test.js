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

const obj1 = {
 name : "dK",
 greet : function (city, country) {
  console.log(`Hello, I'm ${this.name} from ${city}, ${country}`);
 }
}

const person = new obj1("DK")
// const person = { name: "Charlie" };
// obj1.greet.call(person, "New York", "USA");


obj1.greet.call(person);