import React from 'react'
/* import Equilibrium from '../assets/image-equilibrium.jpg';
import IconEthereum from '../assets/icon-ethereum.svg';
import IconClock from '../assets/icon-clock.svg';
import Avatar from '../assets/image-avatar.png'; */
import './ContainerCards.css';
import Card from './Card';
import Equilibrium from '../assets/image-equilibrium.jpg';
import Avatar from '../assets/image-avatar.png';

const ContainerCards = (props) => {
  return (
    <section className='container-cards'>
        <Card 
          imgnftsrc={Equilibrium}
          imgnftalt="Image of Equilibrium NFT"
          title="Equilibrium #3429" 
          paragraph="Our Equilibrium collection promotes balance and calm" 
          price="0.041ETH" 
          days="3 days left" 
          imgcreatorsrc={Avatar}
          imgcreatoralt="Creator avatar" 
          creator="Jules Wyvern"></Card>
        <Card 
          imgnftsrc={Equilibrium}
          imgnftalt="Image of Equilibrium NFT"
          title="Equilibrium #3430" 
          paragraph="Our Equilibrium collection promotes balance and calm blablablablablabla" 
          price="0.072ETH" 
          days="6 days left"
          imgcreatorsrc={Avatar}
          imgcreatoralt="Creator avatar" 
          creator="James Xywarn"></Card>
    </section>
  )
}



/* const Card = () => {
  return (
    <section className='card'>
        <div className='nft-group'>
            <img className='nft-image' src={Equilibrium} alt="Image Equilibrium nft" />
            <h3 className='nft-title'>Equilibrium #3429</h3>
            <p className='nft-par'>Our Equilibrium collection promotes balance and calm</p>
            <div className='price-days-group'>
                <div className='ethereum-group'>
                  <img className='icons' src={IconEthereum} alt="Icon Ethereum" />
                  <p className='price'>0.041 ETH</p>
                </div>
                <div className='clock-group'>
                  <img className='icons' src={IconClock} alt="Icon Clock" />
                  <p className='days'>3 days left</p>
                </div>
            </div>
            <hr className='seperator'/>
            <div className='creator-group'>
                <img className='avatar' src={Avatar} alt="Avatar" />
                <p className='creator-par'>Creation of <span>Jules Wyvern</span></p>
            </div>
        </div>
    </section>
  )
} */

export default ContainerCards;