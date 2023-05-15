import React from 'react'
import './ImageCard.css';


const ImageCard = (props) => {
  return (
   <img className='nft-image' src={props.src} alt={props.alt} />
  )
}

export default ImageCard;