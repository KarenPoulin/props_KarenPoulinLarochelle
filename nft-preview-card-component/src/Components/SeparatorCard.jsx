import React from 'react'
import './SeparatorCard.css';

const SeparatorCard = (props) => {
  return (
    <hr className='separator'>{props.children}</hr>
  )
}

export default SeparatorCard