import React from 'react'
import './ImageCreator.css'

const ImageCreator = (props) => {
  return (
    <img className='avatar' src={props.src} alt={props.alt} />
  )
}

export default ImageCreator