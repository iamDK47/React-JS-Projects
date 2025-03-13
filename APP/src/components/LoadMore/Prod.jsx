import React from 'react'
import { memo } from 'react'


const Prod = memo(({ product }) => {
  console.log('component')
  return (
    <div>
      <img src={product.thumbnail} />
      <p>{product.title}</p>
    </div>
  );
});

export default Prod;

