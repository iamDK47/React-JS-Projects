import React from 'react'
import UseFetch from './UseFetch'

function FetchIndex() {
  const [ importedState ] = UseFetch()

  console.log(importedState)

  return (
    <div>
      <div className='data'>
        {
          importedState && importedState.products.map((obj,index) => 
            <div key={index}>
              {obj.title}
            </div> 
          )
        }
      </div>
      {/* <button onClick={}>
        Click elsewhere
      </button> */}
    </div>
  )
}

export default FetchIndex