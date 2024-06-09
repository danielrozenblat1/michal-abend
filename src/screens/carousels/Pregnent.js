import styles from "./KidsAndPregnent.module.css"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick"
import pregnent1 from "../../images/מיכל אבנד צילום הריון 1.jpg"
import pregnent2 from "../../images/מיכל אבנד צילום הריון 2.jpg"
import pregnent3 from "../../images/מיכל אבנד צילום הריון 3.jpg"
import pregnent4 from"../../images/מיכל אבנד צילום הריון 4.jpg"
import pregnent5 from "../../images/מיכל אבנד צילום הריון 5.jpg"
import pregnent6 from "../../images/מיכל אבנד צילום הריון 6.jpg"
import pregnent7 from "../../images/מיכל אבנד צילום הריון 7.jpg"
import pregnent8 from "../../images/מיכל אבנד צילום הריון 8.jpg"
import pregnent9 from "../../images/מיכל אבנד צילום הריון 9.jpg"
import pregnent10 from "../../images/מיכל אבנד צילום הריון 10.jpg"
import pregnent11 from "../../images/מיכל אבנד צילום הריון 11.jpg"
import pregnent12 from "../../images/מיכל אבנד צילום הריון 12.jpg"
import pregnent13 from "../../images/מיכל אבנד צילום הריון 13.jpg"
import pregnent14 from "../../images/מיכל אבנד צילום הריון 14.jpg" 
import pregnent15 from "../../images/מיכל אבנד צילום הריון 15.jpg" 
import pregnent16 from "../../images/מיכל אבנד צילום הריון 16.jpg" 
import pregnent17 from "../../images/מיכל אבנד צילום הריון 17.jpg" 
import pregnent18 from "../../images/מיכל אבנד צילום הריון 18.jpg" 
import pregnent19 from "../../images/מיכל אבנד צילום הריון 19.jpg" 
import pregnent20 from "../../images/מיכל אבנד צילום הריון 20.jpg"
import pregnent21 from "../../images/מיכל אבנד צילום הריון 21.jpg" 
import pregnent22 from "../../images/מיכל אבנד צילום הריון 22.jpg" 
import pregnent23 from "../../images/מיכל אבנד צילום הריון 23.jpg" 
import pregnent24 from "../../images/מיכל אבנד צילום הריון 24.jpg" 
import pregnent25 from "../../images/מיכל אבנד צילום הריון 25.jpg"
import pregnent26 from "../../images/מיכל אבנד צילום הריון 26.jpg" 
import pregnent27 from "../../images/מיכל אבנד צילום הריון 27.jpg" 
import { useEffect, useRef } from "react";
import {Player} from "@lordicon/react"
import tree from "../../icons/wired-lineal-1855-palmtree.json"
import baby from "../../icons/wired-lineal-654-baby-boy.json"
import mom from "../../icons/wired-lineal-1508-breastfeeding.json"
import Button from "../../components/NavBar/button/Button";
import LazyLoad from 'react-lazyload';
const Pregnent=(props)=>{
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
        autoplaySpeed: 2500,
        slidesToShow: window.innerWidth < 550 ? 1 : window.innerWidth < 750 ? 2 : 3,
        slidesToScroll:1,
  
      };
      
    const content1 = [
        {
          type: 'image',
          src: pregnent1,
        },
        {
            type: 'image',
            src: pregnent2,
          },
          {
            type: 'image',
            src: pregnent3,
          },
          {
            type: 'image',
            src: pregnent4,
          },
          {
            type: 'image',
            src: pregnent5,
          },

        {
          type: 'image',
          src: pregnent6,
        },
        {
          type: 'image',
          src: pregnent7,
        },
        {
          type: 'image',
          src: pregnent8,
        },
        {
          type: 'image',
          src: pregnent9,
        },
        {
            type: 'image',
            src: pregnent10,
          },
        {
          type: 'image',
          src: pregnent11,
        },
        {
          type: 'image',
          src: pregnent12,
        },
        {
            type: 'image',
            src: pregnent13,
          },
          {
              type: 'image',
              src: pregnent14,
            },
          {
            type: 'image',
            src: pregnent15,
          },
          {
            type: 'image',
            src: pregnent16,
          },
      
          {
            type: 'image',
            src: pregnent17,
          },
          {
            type: 'image',
            src: pregnent18,
          },
          {
            type: 'image',
            src: pregnent19,
          },
          {
              type: 'image',
              src: pregnent20,
            },
          {
            type: 'image',
            src: pregnent21,
          },
          {
            type: 'image',
            src: pregnent22,
          },
          {
              type: 'image',
              src: pregnent23,
            },
            {
                type: 'image',
                src: pregnent24,
              },
            {
              type: 'image',
              src: pregnent25,
            },
            {
              type: 'image',
              src: pregnent26,
            },
            {
              type: 'image',
              src: pregnent27,
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
               <LazyLoad once> <img src={item.src} className={styles.image1} alt={`מיכל אבדנ צילומי הריון מספר ${index + 1}`} /></LazyLoad>  
                  )}
      
                </div>
              ))}
            </Slider>
          </div>
     
          <Button text="בואי נדבר לגבי צילומי הריון" icon={mom}/>
    </>
    }
    export default Pregnent