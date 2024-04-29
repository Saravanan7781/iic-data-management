import React, { useEffect, useState } from 'react'
import '../CSS/Home.css'
import image1 from '../Images/img1.jpg'
import image2 from '../Images/img2.jpg'
import image3 from '../Images/img3.jpg'
import image4 from '../Images/img3.jpg'

function Home() {
    const CarouselImages = [image1,image2,image3,image4]
    const [carouselIndex,setCarouselIndex] = useState(0)
   
   


  return (



<div className="homeMain">
<div className="imageSection">
    <div className="images">
    
      {CarouselImages.map((ele,key)=>(
        <img src={ele} key={key} className={`image${key+1}`} />
    ))}

</div>
</div>
   </div> 
  )
}

export default Home