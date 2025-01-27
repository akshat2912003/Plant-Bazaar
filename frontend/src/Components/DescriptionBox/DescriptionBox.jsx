import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>The snake plant, also known as mother-in-law's tongue or Dracaena trifasciata, is a popular houseplant known 
            for its striking appearance and easy care.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
