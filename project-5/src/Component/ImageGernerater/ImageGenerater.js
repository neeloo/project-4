import React, { useRef, useState } from 'react'
import './ImageGenerater.css'
//import image from '../Assets/ai.jpg'
import image1 from '../Assets/images.jpeg'

const ImageGenerater = () => {

  const [imgurl, seturl] = useState("/");
  let inputref = useRef(null);

  const imageGenerater = async () => {
    if (inputref.current.value === "") {
      return 0;
    }
    const reponce = await fetch(
      "https://api.openai.com/v1/images/generations ",
      {
        method: "POST",
        headers: {
          "Content_Type": "application/json",
          Authorization:
            "Bearer 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",
          "User-Agent": "Chrome",
        },
        body: JSON.stringify({
          prompt: `${inputref.current.value}`,
          n: 1,
          size: "512*512",
        }),

      }

    );
    let data=await reponce.json();
   // console.log(data);
   let data_array=data.data;
   seturl(data_array[0].url);


  }


  return (
    <div className='ai-image-generater'>
      <div className="header">
        Ai Image <span>generater</span> </div>
      <div className="image-loading">
        {/* <div className="image"><img src={image} alt="" /></div> */}
        <div className="image"><img src={imgurl === "/" ? image1 : imgurl} alt="" /></div>
      </div>
      <div className="search-bar">
        <input type="text" ref={inputref} className='search-input' placeholder='Describ what you want search' />
        <div className="gernerter-btn" onClick={()=>{imageGenerater()}}>Gernerater</div>
      </div>

    </div>
  )
}

export default ImageGenerater