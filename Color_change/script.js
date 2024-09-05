const button = document.querySelector('#btn')
const color = document.querySelector('.color')


// random Color

// let arrayC = ["red","blue","green","pink","yellow","black"]

// button.addEventListener('click' , function(){
   
//    const randomColor = Math.floor(Math.random()*6)
   
//    document.body.style.backgroundColor = arrayC[randomColor];

//    color.innerHTML = arrayC[randomColor] 

// })

// hex color

// let hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]


// button.addEventListener('click' , function(){
   
   
//    let hexColor = '#'
//    for (let i = 0; i < 6; i++) {
//       const randomColor = Math.floor(Math.random()*hex.length)
//       hexColor += hex[randomColor];
     
//    }
   
//    document.body.style.backgroundColor = hexColor;

//    color.innerHTML = hexColor

// })

// automatic color

let hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

button.addEventListener('click' , function(){
   
    setInterval(function (){
      let hexColor = '#'
      for (let i = 0; i < 6; i++) {
         const randomColor = Math.floor(Math.random()*hex.length)
         hexColor += hex[randomColor];
            
         }
         
      document.body.style.backgroundColor = hexColor;
         
      color.innerHTML = hexColor
   },300)
  
})