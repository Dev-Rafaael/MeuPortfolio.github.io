import React from 'react'
import whatsappIcon from '../assets/IMG/whatsapp.png'
import './WhatsappIcon.css'
function WhatsappIcon() {
  return (
    <>
    <div className='zap'>
          <div className='bolaZap'></div>
          <a href="https://wa.me/5511916658824?text=Olá!" target="_blank" className='whatsappIcon'>
            <img src={whatsappIcon} alt="WhatsApp" className='playIcon'  />
          </a>        
          </div>
    </>
  )
}

export default WhatsappIcon