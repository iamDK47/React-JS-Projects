import React from 'react'

function Test() {
  const arr = [3,4,5,[5,4],4,[4,[4,[4]]]]
  // const arrr = arr.flat().length
  // console.log(arrr)

  let sum = 0
  function summ(arr){
   arr.forEach(item => {
      if(Array.isArray(item)){
        summ(item)
      }else{
        sum += 1
      }
    });
  }
  summ(arr)
  console.log(sum)

  return (
    <div>
      dd
    </div>
  )
}

export default Test

