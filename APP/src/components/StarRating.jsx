import { useState } from "react"
import { FaStar } from 'react-icons/fa'
import './style.css';

function StarRating({star = 5}){

 const [rating , setRating] = useState(0)
 const [hover , setHover] = useState(false)

 const onMouseEnter = (currentId) => {
  setHover(currentId)
 }

 const onMouseLeave = () => {
  setHover(null)
 }

 const onRate = (Id) => {
  setRating(Id)
  console.log(Id)
 }

 const arr = [...Array(star)]

 return(
  <> 
  <div>
   {arr.map((_,index) => {
    index +=  1
    return(
     <FaStar 
     className={ index <= ( hover || rating) ? 'active' : 'inActive'}
     key={index}
     onMouseEnter={() => onMouseEnter(index )}
     onMouseLeave={() => onMouseLeave()}
     onClick={() => onRate(index )}
     />
     )
    }
   )}
  </div>
  </>
 )
}

export default StarRating