import mitzva1 from "../../images/מיכל אבנד בר מצווה 1.png"
import mitzva2 from "../../images/מיכל אבנד בר מצווה 2.png"
import mitzva3 from "../../images/מיכל אבנד צילומי בר מצווה 3.jpg"
import mitzva4 from "../../images/מיכל אבנד בר מצווה.png"


import mitzva48 from "../../images/מיכל אבנד צילומי בר מצווה 48.jpg"

import LazyLoad from 'react-lazyload';
import magenDavid from "../../icons/wired-lineal-1980-star-of-david.json"
import styles from "./FamilyAndBarMitzva.module.css"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick"
import { useEffect, useRef } from "react";
import {Player} from "@lordicon/react"

import Button from "../../components/NavBar/button/Button";
const BarMitzva=(props)=>{
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
        const content1 = [
           
            
    
              {
                type: 'image',
                src: mitzva1,
              },
            
         
             
              {
                type: 'image',
                src: mitzva2,
              },
             
              {
                type: 'image',
                src: mitzva4,
              },
          
        ];


        return <>

<div className={styles.title}>{props.title2}</div>
<div className={styles.description}>מוזמנים להחליק ולהתרשם</div>
<div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content1.map((item, index) => (
            <div key={index}>
              {item.type === 'image' && (
              <LazyLoad once> <img src={item.src} className={styles.image1} alt={`מיכל אבנד צילומי בר/בת מצווה מספר ${index + 1}`} /></LazyLoad>
              )}
  
            </div>
          ))}
        </Slider>
      </div>
 <Button text="בואי נדבר לגבי צילומי בר/בת מצווה" icon={magenDavid} message="היי מיכל , אשמח לשמוע עוד על צילומי בר/בת מצווה"/>
   </>

        }
        export default  BarMitzva