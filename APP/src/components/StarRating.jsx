import { useState } from "react"
import { FaStar } from 'react-icons/fa'

function StarRating({star = 5}){

 const [rating , setRating] = useState(0)
 const [hover , setHover] = useState(0)

 const onMouseEnter = (currentId) => {
  setHover(currentId)
 }

 const onRate = (Id) => {
  setRating(setRating)
 }

 const arr = [...Array(star)]

 return(
  <> 
  <div>
   {
    arr.map((_,index) => 
    <FaStar 
    key={index}
    onMouseEnter={() => onMouseEnter(index)}
    onClick={() => onRate(index)}
    />
    )
   }
  </div>
  </>
 )
}

export default StarRating