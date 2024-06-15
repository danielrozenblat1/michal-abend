import styles from "./KidsAndPregnent.module.css"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick"
import LazyLoad from 'react-lazyload';
import babies1 from "../../images/מיכל אבנד ילדים 1.jpg"
import babies2 from "../../images/מיכל אבנד ילדים 2.jpg"
import babies3 from "../../images/מיכל אבנד ילדים 3.jpg"
import babies4 from "../../images/מיכל אבנד ילדים 4.jpg"
import babies8 from "../../images/מיכל אבנד צילום ילדים 8.jpg"
import babies9 from "../../images/מיכל אבנד צילום ילדים 9.jpg"
import babies10 from "../../images/מיכל אבנד צילום ילדים 10.jpg"

import babies15 from "../../images/מיכל אבנד צילום ילדים 15.jpg"

import babies17 from "../../images/מיכל אבנד צילום ילדים 17.jpg"


import babies20 from "../../images/מיכל אבנד צילום ילדים 20.jpg"

import babies22 from "../../images/מיכל אבנד צילום ילדים 22.jpg"

import babies29 from "../../images/מיכל אבנד צילום ילדים 29.jpg"


import babies40 from "../../images/מיכל אבנד צילום ילדים 40.jpg"
import babies41 from "../../images/מיכל אבנד צילום ילדים 41.jpg"


import { useEffect, useRef } from "react";

import baby from "../../icons/wired-lineal-654-baby-boy.json"

import Button from "../../components/NavBar/button/Button";
const KidsAndPregnent=(props)=>{
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
          src: babies8,
        },
 
        {
          type: 'image',
          src: babies2,
        },
     
     
        {
          type: 'image',
          src: babies9,
        },
        {
            type: 'image',
            src: babies10,
          },
   
      
    
            {
              type: 'image',
              src: babies15,
            },
        
              {
type: 'image',
src: babies17,
              },
          

    
            {
              type: 'image',
              src: babies20,
            },
      
            {
              type: 'image',
              src: babies22,
            },
           
        
  
   
{
  type: 'image',
  src: babies29,
},

 


        






{
  type: 'image',
  src: babies40,
},
{
    type: 'image',
    src: babies41,
  },


  
    ];


return <>
<div className={styles.title} id="עבודות">{props.title}</div>
<div className={styles.description}>מוזמנים להחליק ולהתרשם</div>


<div className={styles.sliderContainer}>
  
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index}>
              {item.type === 'image' && (
  <LazyLoad once><img src={item.src} className={styles.image1} alt={`מיכל אבנד צילומי תינוקות מספר ${index + 1}`} /></LazyLoad>
              )}
  
            </div>
          ))}
        </Slider>
      </div>
    
      <Button text="בואי נדבר לגבי צילומי ילדים" icon={baby} message="היי מיכל , אשמח לשמוע עוד על צילומי ילדים"/>


</>
}
export default KidsAndPregnent