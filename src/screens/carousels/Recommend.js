

import LazyLoad from 'react-lazyload';

import styles from "./FamilyAndBarMitzva.module.css"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick"
import { useEffect, useRef } from "react";
import recommends1 from "../../images/מיכל אבנד המלצות.png"
import recommends2 from "../../images/מיכל אבנד המלצות 2.png"
import recommends3 from "../../images/מיכל אבנד המלצות 3.png"
import recommends4 from "../../images/מיכל אבנד המלצות 4.png"

import Button from "../../components/NavBar/button/Button";
const Recommends=(props)=>{
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
                src: recommends1,
              },
            
    
              {
                type: 'image',
                src: recommends2,
              },
            
         
             
              {
                type: 'image',
                src: recommends3,
              },
             
              {
                type: 'image',
                src: recommends4,
              },
           
             
             
                 
        ];


        return <>

<div className={styles.title}>{props.title}</div>
<div className={styles.description}>מוזמנים להחליק ולהתרשם</div>
<div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content1.map((item, index) => (
            <div key={index}>
              {item.type === 'image' && (
              <LazyLoad once> <img src={item.src} className={styles.image1} alt={`מיכל אבנד המלצה מספר ${index + 1}`} /></LazyLoad>
              )}
  
            </div>
          ))}
        </Slider>
      </div>
 <Button text="התרשמתי, בואי נדבר"  message="היי מיכל , אשמח לשמוע עוד על השירותים שלך"/>
   </>

        }
        export default  Recommends