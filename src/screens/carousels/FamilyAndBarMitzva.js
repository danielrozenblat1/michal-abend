import styles from "./FamilyAndBarMitzva.module.css"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick"
import LazyLoad from 'react-lazyload';
import family from "../../icons/wired-lineal-635-family.json"
import family1 from "../../images/מיכל אבנד צילומי משפחה 1.jpg"
import family2 from "../../images/מיכל אבנד צילומי משפחה 2.jpg"
import family3 from "../../images/מיכל אבנד צילומי משפחה 3.jpg"
import family4 from "../../images/מיכל אבנד צילומי משפחה 4.jpg"
import family5 from "../../images/מיכל אבנד צילומי משפחה 5.jpg"
import family6 from "../../images/מיכל אבנד צילומי משפחה 6.jpg"
import family7 from"../../images/מיכל אבנד צילומי משפחה 7.jpg"
import family9 from "../../images/מיכל אבנד צילומי משפחה 9.jpg" 
import family10 from "../../images/מיכל אבנד צילומי משפחה 10.jpg" 
import family11 from "../../images/מיכל אבנד צילומי משפחה 11.jpg" 
import family12 from "../../images/מיכל אבנד צילומי משפחה 12.jpg" 
import family13 from "../../images/מיכל אבנד צילומי משפחה 13.jpg" 
import family14 from "../../images/מיכל אבנד צילומי משפחה 14.jpg" 
import family17 from "../../images/מיכל אבנד צילומי משפחה 17.jpg" 
import family18 from "../../images/מיכל אבנד צילומי משפחה 18.jpg" 
import family19 from "../../images/מיכל אבנד צילומי משפחה 19.jpg" 
import family20 from "../../images/מיכל אבנד צילומי משפחה 20.jpg" 
import family21 from "../../images/מיכל אבנד צילומי משפחה 21.jpg" 
import family22 from "../../images/מיכל אבנד צילומי משפחה 22.jpg" 
import family23 from "../../images/מיכל אבנד צילומי משפחה 23.jpg" 
import family25 from "../../images/מיכל אבנד צילומי משפחה 25.jpg" 
import family26 from "../../images/מיכל אבנד צילומי משפחה 26.jpg" 
import family27 from "../../images/מיכל אבנד צילומי משפחה 27.jpg" 
import family28 from "../../images/מיכל אבנד צילומי משפחה 28.jpg" 
import family29 from "../../images/מיכל אבנד צילומי משפחה 29.jpg" 
import family30 from "../../images/מיכל אבנד צילומי משפחה 30.jpg" 
import family31 from "../../images/מיכל אבנד צילומי משפחה 31.jpg" 
import family32 from "../../images/מיכל אבנד צילומי משפחה 32.jpg" 
import family33 from "../../images/מיכל אבנד צילומי משפחה 33.jpg" 
import family35 from "../../images/מיכל אבנד צילומי משפחה 35.jpg" 
import family36 from "../../images/מיכל אבנד צילומי משפחה 36.jpg" 
import family38 from "../../images/מיכל אבנד צילומי משפחה 38.jpg" 
import family39 from "../../images/מיכל אבנד צילומי משפחה 39.jpg" 
import family40 from "../../images/מיכל אבנד צילומי משפחה 40.jpg" 
import family41 from "../../images/מיכל אבנד צילומי משפחה 41.jpg" 
import family42 from "../../images/מיכל אבנד צילומי משפחה 42.jpg" 
import family43 from "../../images/מיכל אבנד צילומי משפחה 43.jpg" 
import family44 from "../../images/מיכל אבנד צילומי משפחה 44.jpg" 
import family45 from "../../images/מיכל אבנד צילומי משפחה 45.jpg" 
import family46 from "../../images/מיכל אבנד צילומי משפחה 46.jpg" 
import family47 from "../../images/מיכל אבנד צילומי משפחה 47.jpg" 
import family48 from "../../images/מיכל אבנד צילומי משפחה 48.jpg" 
import family49 from "../../images/מיכל אבנד צילומי משפחה 49.jpg" 
import family50 from "../../images/מיכל אבנד צילומי משפחה 50.jpg" 
import family51 from "../../images/מיכל אבנד צילומי משפחה 51.jpg" 
import family52 from "../../images/מיכל אבנד צילומי משפחה 52.jpg" 
import family53 from "../../images/מיכל אבנד צילומי משפחה 53.jpg" 
import family54 from "../../images/מיכל אבנד צילומי משפחה 54.jpg" 
import family55 from "../../images/מיכל אבנד צילומי משפחה 55.jpg" 
import family56 from "../../images/מיכל אבנד צילומי משפחה 56.jpg" 
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
          src: family7,
        },                    
        {
          type: 'image',
          src: family11,
        },
      
        {
            type: 'image',
            src: family13,
          },
          {
              type: 'image',
              src: family14,
            },
           
              {
                type: 'image',
                src: family17,
              },
              {
                type: 'image',
                src: family18,
              },
                         
            {
              type: 'image',
              src: family22,
            },
            {
              type: 'image',
              src: family23,
            },
         
            {
              type: 'image',
              src: family25,
            },
            {
              type: 'image',
              src: family26,
            },
            {
                type: 'image',
                src: family27,
              },
              {
                  type: 'image',
                  src: family28,
                },
              
                 
                  {
                    type: 'image',
                    src: family32,
                  },
                          
                {
                  type: 'image',
                  src: family35,
                },
              
             
                {
                    type: 'image',
                    src: family38,
                  },
                {
                  type: 'image',
                  src: family39,
                },
               
               
                  {
                      type: 'image',
                      src: family42,
                    },
                 
                      {
                        type: 'image',
                        src: family45,
                      },
                      {
                          type: 'image',
                          src: family46,
                        },
                        {
                          type: 'image',
                          src: family47,
                        },
                        {
                            type: 'image',
                            src: family48,
                          },
                          {
                            type: 'image',
                            src: family49,
                          },
                          {
                            type: 'image',
                            src: family50,
                          },
                          {
                              type: 'image',
                              src: family51,
                            },
                            {
                                type: 'image',
                                src: family52,
                              },
                              {
                                type: 'image',
                                src: family53,
                              },
                              {
                                  type: 'image',
                                  src: family54,
                                },
                                {
                                  type: 'image',
                                  src: family55,
                                },
                                {
                                    type: 'image',
                                    src: family56,
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
      <Button text="בואי נדבר לגבי צילומי משפחה" icon={family}/>
   

</>
}
export default FamilyAndBarMitzva