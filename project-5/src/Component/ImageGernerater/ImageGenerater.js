import React from 'react'
import './ImageGenerater.css'
//import image from '../Assets/ai.jpg'
import image1 from '../Assets/images.jpeg'

const ImageGenerater = () => {
  return (
    <div className='ai-image-generater'>
    <div className="header">
        Ai Image <span>generater</span> </div>
        <div className="image-loading">
            {/* <div className="image"><img src={image} alt="" /></div> */}
            <div className="image"><img src={image1} alt="" /></div>
        </div>
        <div className="search-bar">
          <input type="text"  className='search-input' placeholder='Describ what you want search'/>
        </div>

    </div>
  )
}

export default ImageGenerater