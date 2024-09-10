// const number = document.getElementById("number")
// const decrease = document.getElementById('decrease')
// const reset = document.getElementById('reset')
// const increase = document.getElementById('increase')

// let count = 0

// let counter = function() {
//    for (let i = 0; i < 5; i++) {}
//    count = count + 1;
//    number.innerHTML = count
// }

// let counter1 = function(){
//    if(count > 0){
//       for (let i = 0; i < 5; i++) {}
//       count = count - 1;
//       number.innerHTML = count
//    } 
//    else if(count === 0) {
//       return
// }}

// let res = function(){
//       number.innerHTML = '';
// }

// increase.addEventListener('click', counter)

// decrease.addEventListener('click', counter1)

// reset.addEventListener('click', res)

let count = 0

const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')


btns.forEach(function(btn){
   btn.addEventListener('click',function(e) {
      const styles = e.currentTarget.classList
      if(styles.contains("decrease")){
         count = count - 1;
      }
      value.textContent = count
   })   
})
