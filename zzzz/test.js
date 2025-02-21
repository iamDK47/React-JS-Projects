// new Promise((resolve) => {
//   setTimeout( () => resolve('done!') , 1000)
// }) .then( result => console.log(result))

// function getUser(userId, callback) {
//  setTimeout(() => {
//    console.log("User fetched");
//    callback({ id: userId, name: "Alice" });
//  }, 1000);
// }

// function getOrders(user, callback) {
//  setTimeout(() => {
//    console.log("Orders fetched");
//    callback(["Order 1", "Order 2"]);
//  }, 1000);
// }

// function getOrderDetails(order, callback) {
//  setTimeout(() => {
//    console.log("Order details fetched");
//    callback({ details: "Details of " + order });
//  }, 1000);
// }

// getUser(1, (user) => {
//  getOrders(user, (orders) => {
//    getOrderDetails(orders[0], (details) => {
//      console.log(details);
//    });
//  });
// });

// getUser(1,() => getOrders(1, () => getOrderDetails(1 , () => console.log('lol'))))

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data received"), 2000);
  });
}

fetchData().then(data => console.log(data)).catch(err => console.error(err));
