import styles from "./FamilyAndBarMitzva.module.css"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick"
import LazyLoad from 'react-lazyload';
import family from "../../icons/wired-lineal-635-family.json"

import family39 from "../../images/מיכל אבנד צילומי משפחה 39.jpg" 

import family52 from "../../images/מיכל אבנד צילומי משפחה 52.jpg" 
import family1 from "../../images/מיכל אבנד צילום משפחה 1.jpg"
import family2 from "../../images/מיכל אבנד צילום משפחה 2.jpg"
import family3 from "../../images/מיכל אבנד צילום משפחה 3.jpg"
import family4 from "../../images/מיכל אבנד צילום משפחה 4.jpg"
import { useEffect, useRef } from "react";
import {Player} from "@lordicon/react"
import tree from "../../icons/wired-lineal-1855-palmtree.json"
import Button from "../../components/NavBar/button/Button";
const FamilyAndBarMitzva=(props)=>{
  const playerRef1=useRef(null)
  useEffect(()=>{

 
  playerRef1?.current?.playFromBeginning()
},[])
const handleComplete = () => {
  setTimeout(() => {
    playerRef1?.current?.playFromBeginning();
  }, 2000); // play again after 2.5 seconds
};

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000,
        slidesToShow: window.innerWidth < 550 ? 1 : window.innerWidth < 750 ? 2 : 3,
        slidesToScroll:1,
  
      };

    const content = [
      
       
      
          
          
              
               
                {
                  type: 'image',
                  src: family39,
                },
               
                {
                  type: 'image',
                  src: family1,
                },
                {
                  type: 'image',
                  src: family2,
                },
                {
                  type: 'image',
                  src: family3,
                },

               
                {
                  type: 'image',
                  src: family4,
                },  
                       
                          
                            {
                                type: 'image',
                                src: family52,
                              },
                                              
    ];

return <>
<div className={styles.title}>{props.title}</div>
<div className={styles.description}>מוזמנים להחליק ולהתרשם</div>


<div className={styles.sliderContainer}>
  
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index}>
              {item.type === 'image' && (
             <LazyLoad once><img src={item.src} className={styles.image1} alt={`מיכל אבנד צילומי משפחה מספר ${index + 1}`} /></LazyLoad> 
              )}
  
            </div>
          ))}
        </Slider>
      </div>
      <Button text="בואי נדבר לגבי צילומי משפחה" icon={family} message="היי מיכל , אשמח לשמוע עוד על צילומי משפחה"/>
   

</>
}
export default FamilyAndBarMitzva