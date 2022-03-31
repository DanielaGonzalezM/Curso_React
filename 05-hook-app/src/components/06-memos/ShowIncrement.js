import React, { memo } from 'react'

const ShowIncrement = memo(({increment}) => {

    console.log(':C');
  return (
    <button className='btn btn-primary' onClick={()=>{
        increment(5);
    }}>
        Incremantar
    </button>
  )
})

export default ShowIncrement