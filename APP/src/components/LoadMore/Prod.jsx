import React from 'react'
import { memo } from 'react'


const Prod = memo(({ thumbnail, title }) => {
  return (
    <div>
      <img src={thumbnail} />
      <p>{title}</p>
    </div>
  );
}, [thumbnail,title]);

export default Prod;