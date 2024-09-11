const details = [
   {
      id:"1",
      name:"daniyal",
      skill:"design",
      img:"yo",
   },
   {
      id:"2",
      name:"ammar",
      skill:"tax",
      img:"hee",
   },
   {
      id:"3",
      name:"arslan",
      skill:"labour",
      img:"no",
   },
   {
      id:"4",
      name:"kamran",
      skill:"sale",
      img:"lol",
   }
] 

const name = document.getElementById('name')
const img= document.getElementById('img')
const skill = document.getElementById('skill')
const next = document.getElementById('Next')
const Previous = document.getElementById('Previous')

let random = 0

window.addEventListener('DOMContentLoaded',Details)

let Details = function(){
   skill.textContent = details[random].skill
   name.textContent = details[random].name
}

next.addEventListener('click', function(){
   random = random + 1
})
Previous.addEventListener('click', function(){
   random = random - 1
})