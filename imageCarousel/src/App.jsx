import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';

const App = () => {
  return (
    <Carousel>
      <div className="max-w-full max-h-[500px] object-contain" >
         <img src="https://www.pexels.com/photo/bread-and-towel-on-table-16471876/" />
         <p className="legend">Legend 1</p>
       </div >
       <div  className="max-w-full max-h-[500px] object-contain" >
         <img src="https://www.pexels.com/photo/woman-lying-on-bed-with-laptop-and-candle-18884059/" />
         <p className="legend">Legend 2</p>
       </div>
      <div  className="max-w-full max-h-[500px] object-contain" >
      <img src="https://hcn.imgix.net/uploads/2021/07/a.jpg?auto=format%2Ccompress&ixlib=php-3.3.1&w=1200&s=132ebe90ea08618fbcdde31ce0461c67" />
      <p className="legend">Legend 3</p>
     </div>
   </Carousel>
  );
};
export default App




// const App = () => {
//   const [currentImgIndex, setCurrentImgIndex] = useState(0);

//   const imgArray = [
//     "https://dreamlandadventuretourism.com/wp-content/uploads/2023/12/img-world-ticket-from-dream.webp",
//     "https://www.pexels.com/photo/woman-lying-on-bed-with-laptop-and-candle-18884059/",
//     "https://hcn.imgix.net/uploads/2021/07/a.jpg?auto=format%2Ccompress&ixlib=php-3.3.1&w=1200&s=132ebe90ea08618fbcdde31ce0461c67"
//   ];

//   const prevImg = () => {
//     setCurrentImgIndex((prevIndex) => 
//       prevIndex === 0 ? imgArray.length - 1 : prevIndex - 1
//   );
// };
// console.log(imgArray.length)

// const nextImg = () => {
//   setCurrentImgIndex((prevIndex) => 
//     // (prevIndex + 1) % imgArray.length
//       prevIndex === (imgArray.length - 1) ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="max-h-screen flex flex-col items-center justify-center">
//       <div className="flex items-center space-x-4">
//         <button 
//           onClick={prevImg} 
//           className="px-4 py-2 bg-blue-500 text-white rounded"
//         >
//           Previous
//         </button>
        
//         <img 
//           src={imgArray[currentImgIndex]} 
//           alt={`Slide ${currentImgIndex + 1}`} 
//           className="max-w-full max-h-[500px] object-contain"
//         />
        
//         <button 
//           onClick={nextImg} 
//           className="px-4 py-2 bg-blue-500 text-white rounded"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

export default App;
