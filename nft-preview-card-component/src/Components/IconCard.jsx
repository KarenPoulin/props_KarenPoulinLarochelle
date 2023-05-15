import React from 'react'
import './IconCard'

const IconCard = (props) => {
  return (
    <img className='icons' src={props.src} alt={props.alt} />
  )
}

export default IconCard