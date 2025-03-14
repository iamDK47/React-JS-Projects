import React, { useEffect, useState , useMemo } from 'react'
import Prod from './Prod'


function LoadMore() {
  
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [disable, setDisable] = useState(false)

 async function getData() {
  try {
   setLoading(true)
   const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${ count === 0 ? 0 : count * 20}`)
   if(!response.ok){
    throw('error fetching data')
   } else {
    const result = await response.json()
    setProducts((prev) => [...prev, ...result.products]) 
    // setProducts(result.products) 
    setLoading(false)
   }
 }
 catch (err) {
   console.log('error', err)
   setLoading(false)
 }
}

 console.log(products)
 
 useEffect(() => {
  getData()
 } ,[count])

useEffect( () => {
  if(products.length === 100) {
    setDisable(true)
  }
},[products])

 if(loading && products.length === 0){
  return <div>Loading Please Wait</div>
 }

 const createProd = () => {
  return products.map((product) => 
    <Prod key={product.id} product={product}/>
    )
 }

  return (
   <>
    <div className='main'>
     <div className='products'>
      { createProd()}
     </div>
       <button
       disabled={disable}
       onClick={() => setCount(count + 1)}>
        Load More
       </button>
       {disable ? <p>No more Products to Load</p>: null}
    </div>
   </>
  )
}

export default LoadMore


// import { useState, useEffect } from "react";
// import Prod from "./Prod";
// // import "./App.scss";

// function LoadMore({ text }) {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [hasMore, setHasMore] = useState(true);
//   const [curPage, setCurPage] = useState(1);
//   const [errorMsg, setErrorMsg] = useState("");

//   const getData = async (url) => {
//     const res = await fetch(url);
//     return res.json();
//   };

//   //https://picsum.photos/
//   useEffect(() => {
//     const url = `https://picsum.photos/v2/list?page=${curPage}&limit=10`;
//     setLoading(true);
//     getData(url)
//       .then((res) => {
//         setHasMore(res.length > 0);
//         setData((prev) => [...prev, ...res]);
//         setErrorMsg("");
//       })
//       .catch((err) => {
//         // set the error msg
//         setErrorMsg("Something went wrong, Please try again later");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [curPage]);

//   const createLists = () => {
//     return data.map((ele) => {
//       return <Prod key={ele.id} url={ele.download_url} name={ele.author} />;
//     });
//   };
//   const loadMoreOnClick = () => {
//     // prevent click if the state is loading
//     if (loading) return;
//     setCurPage((prev) => prev + 1);
//   };

//   return (
//     <div className="main-container">
//       <h1>Random Images</h1>
//       <div className="cardlist-container">
//         {createLists()}
//         {errorMsg && <p className="error-msg">{errorMsg}</p>}
//         {hasMore && (
//           <button className="loading-more-btn" onClick={loadMoreOnClick}>
//             {loading ? "Loading..." : "Load More"}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default LoadMore;
