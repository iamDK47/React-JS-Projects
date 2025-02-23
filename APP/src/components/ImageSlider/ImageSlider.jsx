import React, { useState } from 'react'
import "./style.css";

function ImageSlider() {

  const arr = [
    "https://images.pexels.com/photos/30770767/pexels-photo-30770767.jpeg",
    "https://images.pexels.com/photos/17353367/pexels-photo-17353367.jpeg",
    "https://images.pexels.com/photos/11006305/pexels-photo-11006305.jpeg",
    "https://images.pexels.com/photos/18255099/pexels-photo-18255099.jpeg",
    "https://images.pexels.com/photos/5027484/pexels-photo-5027484.jpeg",
    "https://images.pexels.com/photos/2607555/pexels-photo-2607555.jpeg",
    "https://images.pexels.com/photos/24768538/pexels-photo-24768538.jpeg",
    "https://images.pexels.com/photos/30254289/pexels-photo-30254289.jpeg",
  ];

 const [img, setImg] = useState(0)

 const Next = () => {
  setImg((prev) =>
    prev === (arr.length - 1) ? 0 : img + 1
  ) 
 }

 const Prev = () => {
 setImg(prev => 
  prev === 0 ? (arr.length - 1) : (img - 1) 
 )
 }

  return (
    <>
     <div>
      <button
      onClick={Prev}
      >
      <a href="#" className="previous">&laquo; Previous</a>
      </button>
      <img src={arr[img]} className="slider-image" alt="Motorcycle" >
      </img>
      <button
      onClick={Next}
      >
      <a href="#" className="next">Next &raquo;</a>
      </button>
     </div>
    </>
  )
}

export default ImageSlider