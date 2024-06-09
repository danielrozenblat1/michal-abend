import styles from "./KidsAndPregnent.module.css"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick"
import LazyLoad from 'react-lazyload';
import babies1 from "../../images/מיכל אבנד צילום ילדים 1.jpg"
import babies2 from "../../images/מיכל אבנד צילום ילדים 2.jpg"
import babies3 from "../../images/מיכל אבנד צילום ילדים 3.jpg"
import babies4 from "../../images/מיכל אבנד צילום ילדים 4.jpg"
import babies5 from"../../images/מיכל אבנד צילום ילדים 15.jpg"
import babies6 from "../../images/מיכל אבנד צילום ילדים 6.jpg"
import babies7 from "../../images/מיכל אבנד צילום ילדים 7.jpg"
import babies8 from "../../images/מיכל אבנד צילום ילדים 8.jpg"
import babies9 from "../../images/מיכל אבנד צילום ילדים 9.jpg"
import babies10 from "../../images/מיכל אבנד צילום ילדים 10.jpg"
import babies11 from "../../images/מיכל אבנד צילום ילדים 11.jpg"
import babies12 from "../../images/מיכל אבנד צילום ילדים 12.jpg"
import babies13 from "../../images/מיכל אבנד צילום ילדים 13.jpg"
import babies14 from "../../images/מיכל אבנד צילום ילדים 14.jpg"
import babies15 from "../../images/מיכל אבנד צילום ילדים 15.jpg"
import babies16 from "../../images/מיכל אבנד צילום ילדים 16.jpg"
import babies17 from "../../images/מיכל אבנד צילום ילדים 17.jpg"
import babies18 from "../../images/מיכל אבנד צילום ילדים 18.jpg"
import babies19 from "../../images/מיכל אבנד צילום ילדים 19.jpg"
import babies20 from "../../images/מיכל אבנד צילום ילדים 20.jpg"
import babies21 from "../../images/מיכל אבנד צילום ילדים 21.jpg"
import babies22 from "../../images/מיכל אבנד צילום ילדים 22.jpg"
import babies23 from "../../images/מיכל אבנד צילום ילדים 23.jpg"
import babies24 from "../../images/מיכל אבנד צילום ילדים 24.jpg"
import babies25 from "../../images/מיכל אבנד צילום ילדים 25.jpg"
import babies26 from "../../images/מיכל אבנד צילום ילדים 26.jpg"
import babies27 from "../../images/מיכל אבנד צילום ילדים 27.jpg"
import babies28 from "../../images/מיכל אבנד צילום ילדים 28.jpg"
import babies29 from "../../images/מיכל אבנד צילום ילדים 29.jpg"
import babies30 from "../../images/מיכל אבנד צילום ילדים 30.jpg"
import babies31 from "../../images/מיכל אבנד צילום ילדים 31.jpg"
import babies32 from "../../images/מיכל אבנד צילום ילדים 32.jpg"
import babies33 from "../../images/מיכל אבנד צילום ילדים 33.jpg"
import babies34 from "../../images/מיכל אבנד צילום ילדים 34.jpg"
import babies35 from "../../images/מיכל אבנד צילום ילדים 35.jpg"
import babies36 from "../../images/מיכל אבנד צילום ילדים 36.jpg"
import babies37 from "../../images/מיכל אבנד צילום ילדים 37.jpg"
import babies38 from "../../images/מיכל אבנד צילום ילדים 38.jpg"
import babies39 from "../../images/מיכל אבנד צילום ילדים 39.jpg"
import babies40 from "../../images/מיכל אבנד צילום ילדים 40.jpg"
import babies41 from "../../images/מיכל אבנד צילום ילדים 41.jpg"
import babies42 from "../../images/מיכל אבנד צילום ילדים 42.jpg"
import babies43 from "../../images/מיכל אבנד צילום ילדים 43.jpg"
import babies44 from "../../images/מיכל אבנד צילום ילדים 44.jpg"
import babies45 from "../../images/מיכל אבנד צילום ילדים 45.jpg"
import babies46 from "../../images/מיכל אבנד צילום ילדים 46.jpg"
import babies47 from "../../images/מיכל אבנד צילום ילדים 47.jpg"
import babies48 from "../../images/מיכל אבנד צילום ילדים 48.jpg"
import babies49 from "../../images/מיכל אבנד צילום ילדים 49.jpg"

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
        autoplaySpeed: 2500,
        slidesToShow: window.innerWidth < 550 ? 1 : window.innerWidth < 750 ? 2 : 3,
        slidesToScroll:1,
  
      };

    const content = [
        {
          type: 'image',
          src: babies1,
        },
        {
            type: 'image',
            src: babies2,
          },
          {
            type: 'image',
            src: babies3,
          },
          {
            type: 'image',
            src: babies4,
          },
          {
            type: 'image',
            src: babies5,
          },

        {
          type: 'image',
          src: babies6,
        },
        {
          type: 'image',
          src: babies7,
        },
        {
          type: 'image',
          src: babies8,
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
          src: babies11,
        },
        {
          type: 'image',
          src: babies12,
        },
        {
            type: 'image',
            src: babies13,
          },
          {
              type: 'image',
              src: babies14,
            },
            {
              type: 'image',
              src: babies15,
            },
            {
type: 'image',
src: babies16,
              },
              {
type: 'image',
src: babies17,
              },
              {
type: 'image',
src: babies18,
              },
              {
type: 'image',
src: babies19,
              },
    
            {
              type: 'image',
              src: babies20,
            },
            {
              type: 'image',
              src: babies21,
            },
            {
              type: 'image',
              src: babies22,
            },
            {
              type: 'image',
              src: babies23,
            },
            {
type: 'image',
src: babies24,
              },
            {
              type: 'image',
              src: babies25,
            },
            {
              type: 'image',
              src: babies26,
            },
            {
type: 'image',
src: babies27,
              },
              {
  type: 'image',
  src: babies28,
},
{
  type: 'image',
  src: babies29,
},
{
    type: 'image',
    src: babies30,
  },
  {
    type: 'image',
    src: babies31,
  },
  {
    type: 'image',
    src: babies32,
  },
  {
    type: 'image',
    src: babies33,
  },
        
{
  type: 'image',
  src: babies34,
},
{
  type: 'image',
  src: babies35,
},
{
  type: 'image',
  src: babies36,
},
{
  type: 'image',
  src: babies37,
},
{
    type: 'image',
    src: babies38,
  },
{
  type: 'image',
  src: babies39,
},
{
  type: 'image',
  src: babies40,
},
{
    type: 'image',
    src: babies41,
  },
  {
      type: 'image',
      src: babies42,
    },
    {
      type: 'image',
      src: babies43,
    },
    {
        type: 'image',
        src: babies44,
      },
      {
        type: 'image',
        src: babies45,
      },
      {
 type: 'image',
 src: babies46,
        },
        {
 type: 'image',
 src: babies47,
        },
        {
   type: 'image',
   src: babies48,
 },
 {
   type: 'image',
   src: babies49,
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
  <LazyLoad once><img src={item.src} className={styles.image1} alt={`מיכל אבנד צילומי תינוקות מספר ${index + 1}`} /></LazyLoad>
              )}
  
            </div>
          ))}
        </Slider>
      </div>
    
      <Button text="בואי נדבר לגבי צילומי תינוקות" icon={baby}/>


</>
}
export default KidsAndPregnent