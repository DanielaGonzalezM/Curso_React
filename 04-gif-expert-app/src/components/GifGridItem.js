import React from 'react'

export const GifGridItem = ({title,url}) => {
    
  return (
    <div>
    
        <img src={url} alt={title}></img>
        <p>{title}</p>
    </div>
  )
}
