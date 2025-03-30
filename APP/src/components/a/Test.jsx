import React from 'react'

function Test() {
  const arr = [true,true,false,true]
  function countTrue(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] === true){
        sum += 1
      }
       
      
    }
    console.log(sum)
  }
  countTrue(arr)
  return (
    <div>
      dd
    </div>
  )
}

export default Test