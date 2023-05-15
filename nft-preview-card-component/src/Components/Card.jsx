import React from 'react'
import './Card.css'
import TextCard from './TextCard'
import ImageCard from './ImageCard'
import SeparatorCard from './SeparatorCard'
import IconCard from './IconCard';
import IconEthereum from '../assets/icon-ethereum.svg';
import IconClock from '../assets/icon-clock.svg';
import ImageCreator from './ImageCreator'

const Card = (props) => {
  return (
    <div className='card'>
        {props.children}
        <ImageCard src={props.imgnftsrc} alt={props.imgnftalt}/>
        <TextCard className="title">{props.title}</TextCard> 
        <TextCard >{props.paragraph}</TextCard>
        <div className='price-days-group'>
          <div className='ethereum-group '>
            <IconCard src={IconEthereum} alt="Ethereum icon"/>
            <TextCard className="price">{props.price}</TextCard>
          </div>
          <div className='clock-group'>
            <IconCard src={IconClock} alt="Clock icon"/>
            <TextCard className="days">{props.days}</TextCard>
          </div>
        </div>
        <SeparatorCard />
        <div className='creator-group'>
          <ImageCreator src={props.imgcreatorsrc} alt={props.imgcreatoralt} />
          <TextCard className="creator">Creation of 
              <TextCard className="span"> {props.creator}</TextCard> 
          </TextCard>
        </div>
    </div>
  )
}

export default Card