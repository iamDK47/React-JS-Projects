const number = document.getElementById("number")
const decrease = document.getElementById('decrease')
const reset = document.getElementById('reset')
const increase = document.getElementById('increase')

let count = 0

increase.addEventListener('click',function(){
   for (let i = 0; i < 5; i++) {}
   count = count + 1;
   number.innerHTML = count
})

decrease.addEventListener('click',function(){
   
})