import styles from "./PregnentMehiron.module.css"
import premium from "../../icons/wired-lineal-433-cup-prize (2).json"
import silver from "../../icons/wired-lineal-1781-medal-second-place.json"
import gold from "../../icons/wired-lineal-1780-medal-first-place.json"
import { useEffect, useRef } from "react"
import { Player } from "@lordicon/react"
import ScrollReveal from "scrollreveal"
import Button from "../../components/NavBar/button/Button"
const PregnentMehiron=(props)=>{
   
    const playerRef1=useRef()
    const playerRef2=useRef()
    const playerRef3=useRef()

    useEffect(()=>{
        ScrollReveal().reveal(`.${styles.wrap}`, {
            duration: 1000,
            distance: "30px",
            origin: "top", // Start from the right side
            easing: "ease-in-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
          ScrollReveal().reveal(`.${styles.title}`, {
            duration: 1000,
            distance: "30px",
            origin: "top", // Start from the right side
            easing: "ease-in-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
          ScrollReveal().reveal(`.${styles.plus}`, {
            duration: 1000,
            distance: "30px",
            origin: "top", // Start from the right side
            easing: "ease-in-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
          ScrollReveal().reveal(`.${styles.more}`, {
            duration: 1000,
            distance: "30px",
            origin: "top", // Start from the right side
            easing: "ease-in-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
        playerRef1.current?.playFromBeginning();
        playerRef2.current?.playFromBeginning();
        playerRef3.current?.playFromBeginning();
  
    },[])
return <>
<div className={styles.title} id="מחירון">מחירון צילומי הריון</div>
<div className={styles.row}>
<div className={styles.wrap}>
{/* <div className={styles.icon}><Player ref={playerRef1} size="100%" onComplete={() => playerRef1.current?.playFromBeginning()} icon={silver} /></div> */}
<div className={styles.header}>חבילה קלאסית</div>
<div className={styles.description}>שעה של צילומים</div>
<div className={styles.description}>לוקיישן לבחירה בעמק יזראל</div>
<div className={styles.description}>80 תמונות בעריכה טבעית (ללא פוטושופ)</div>
<div className={styles.description}>ייעוץ סטיילינג + 2 שמלות לבחירה</div>

</div>

<div className={styles.wrap}>
{/* <div className={styles.icon}><Player ref={playerRef2} size="100%" onComplete={() => playerRef2.current?.playFromBeginning()} icon={gold} /></div> */}
<div className={styles.header}>חבילת צילום הזהב</div>
<div className={styles.description}>שעה וחצי של צילומים</div>
<div className={styles.description}> 2 לוקיישנים לבחירה</div>
<div className={styles.description}>100 תמונות לעריכה + 3 תמונות בפוטושופ</div>
<div className={styles.description}> מגוון רחב של שמלות הריון לבחירה</div>
</div>

<div className={styles.wrap}>
{/* <div className={styles.icon}><Player ref={playerRef3} size="100%" onComplete={() => playerRef3.current?.playFromBeginning()} icon={premium} /></div> */}
<div className={styles.header}>חבילת צילום פרימיום</div>
<div className={styles.description}>שעה וחצי של צילומים</div>
<div className={styles.description}> 2 לוקיישנים לבחירה</div>
<div className={styles.description}>120 תמונות לעריכה + 8 תמונות בפוטושופ</div>
<div className={styles.description}> מגוון רחב של שמלות הריון לבחירה</div>
<div className={styles.description}> אלבום מהודר עם כריכת תמונה</div>
</div>




</div>




<div className={styles.title}>מחירון צילומי גיל שנה</div>
<div className={styles.row}>
<div className={styles.wrap}>
{/* <div className={styles.icon}><Player ref={playerRef1} size="100%" onComplete={() => playerRef1.current?.playFromBeginning()} icon={silver} /></div> */}
<div className={styles.header}>חבילה קלאסית</div>
<div className={styles.description}>45 דקות של צילומים</div>
<div className={styles.description}>לוקיישן לבחירה</div>
<div className={styles.description}>עד 2 החלפות לבוש</div>
<div className={styles.description}>65 תמונות בעריכה טבעית (ללא פוטושופ)</div>
<div className={styles.description}>ניתן להוסיף צילומים עם ההורים בתוספת 200 ש''ח</div>

</div>

<div className={styles.wrap}>
{/* <div className={styles.icon}><Player ref={playerRef2} size="100%" onComplete={() => playerRef2.current?.playFromBeginning()} icon={gold} /></div> */}
<div className={styles.header}>חבילת צילום הזהב</div>
<div className={styles.description}>שעה וחצי של צילומים</div>
<div className={styles.description}> 2 לוקיישנים לבחירה</div>
<div className={styles.description}>3 החלפות לבוש</div>
<div className={styles.description}>100 תמונות לעריכה + 3 תמונות בפוטושופ</div>
<div className={styles.description}>כוללת סט צילומים עם ההורים</div>
</div>

<div className={styles.wrap}>
{/* <div className={styles.icon}><Player ref={playerRef3} size="100%" onComplete={() => playerRef3.current?.playFromBeginning()} icon={premium} /></div> */}
<div className={styles.header}>חבילת צילום פרימיום</div>
<div className={styles.description}>שעתיים של צילומים</div>
<div className={styles.description}> 3 לוקיישנים לבחירה</div>
<div className={styles.description}>150 תמונות לעריכה + 8 תמונות בפוטושופ</div>
<div className={styles.description}>מספר סטים של לבוש ללא הגבלה</div>
<div className={styles.description}> אלבום פוטו מעוצב 20*20</div>
</div>

</div>







<div className={styles.title}>מחירון צילומי בר/בת מצווה</div>
<div className={styles.row}>
<div className={styles.wrap}>
{/* <div className={styles.icon}><Player ref={playerRef1} size="100%" onComplete={() => playerRef1.current?.playFromBeginning()} icon={silver} /></div> */}
<div className={styles.header}>חבילה קלאסית</div>
<div className={styles.description}>שעה של צילומים</div>
<div className={styles.description}>2 החלפות בגדים</div>
<div className={styles.description}>לוקיישן לבחירה</div>
<div className={styles.description}>80 תמונות בעריכה טבעית (ללא פוטושופ)</div>
<div className={styles.description}>ייעוץ סטיילינג + בחירת ביגוד</div>

</div>

<div className={styles.wrap}>
{/* <div className={styles.icon}><Player ref={playerRef2} size="100%" onComplete={() => playerRef2.current?.playFromBeginning()} icon={gold} /></div> */}
<div className={styles.header}>חבילת צילום הזהב</div>
<div className={styles.description}>שעתיים של צילומים</div>
<div className={styles.description}> 2 לוקיישנים לבחירה</div>
<div className={styles.description}>4 החלפות בגדים</div>
<div className={styles.description}>100 תמונות לעריכה + 3 תמונות בפוטושופ</div>
<div className={styles.description}> ייעוץ הכוונה וסטיילינג</div>
</div>

<div className={styles.wrap}>
{/* <div className={styles.icon}><Player ref={playerRef3} size="100%" onComplete={() => playerRef3.current?.playFromBeginning()} icon={premium} /></div> */}
<div className={styles.header}>חבילת צילום פרימיום</div>
<div className={styles.description}>4 שעות של צילומים + צילומי משפחה</div>
<div className={styles.description}> 3 לוקיישנים לבחירה</div>
<div className={styles.description}>150 תמונות לעריכה + 8 תמונות בפוטושופ</div>
<div className={styles.description}> סטים של ביגוד להחלפה ללא הגבלה</div>
<div className={styles.description}> אלבום פוטו מעוצב בגודל 30*60</div>
</div>

</div>

<div className={styles.title}>מחירון שאר הצילומים</div>
<div className={styles.row}>
<div className={styles.wrap}>
{/* <div className={styles.icon}><Player ref={playerRef1} size="100%" onComplete={() => playerRef1.current?.playFromBeginning()} icon={silver} /></div> */}
<div className={styles.header}>חבילה קלאסית</div>
<div className={styles.description}>שעה של צילומים</div>
<div className={styles.description}>לוקיישן לבחירה </div>
<div className={styles.description}>80 תמונות בעריכה טבעית (ללא פוטושופ)</div>
<div className={styles.description}>ייעוץ והכוונה לסטיילינג</div>
<div className={styles.description}>מתאים למשפחה עם 2 ילדים</div>
</div>

<div className={styles.wrap}>
{/* <div className={styles.icon}><Player ref={playerRef2} size="100%" onComplete={() => playerRef2.current?.playFromBeginning()} icon={gold} /></div> */}
<div className={styles.header}>חבילת צילום הזהב</div>
<div className={styles.description}>שעה וחצי של צילומים</div>
<div className={styles.description}> לוקיישן לבחירה</div>
<div className={styles.description}>100 תמונות לעריכה + 3 תמונות בפוטושופ</div>
<div className={styles.description}>מגוון רחב של אביזרים וביגוד לבחירתכם</div>
<div className={styles.description}>מתאים למשפחה עם 2 ילדים</div>
</div>

<div className={styles.wrap}>
{/* <div className={styles.icon}><Player ref={playerRef3} size="100%" onComplete={() => playerRef3.current?.playFromBeginning()} icon={premium} /></div> */}
<div className={styles.header}>חבילת צילום פרימיום</div>
<div className={styles.description}>שעה וחצי של צילומים</div>
<div className={styles.description}> 2 לוקיישנים לבחירה</div>
<div className={styles.description}>120 תמונות לעריכה + 8 תמונות בפוטושופ</div>
<div className={styles.description}> ייעוץ סטיילינג הכוונה ובחירת ביגוד</div>
<div className={styles.description}>מתאים למשפחה עד 5 נפשות</div>
</div>

</div>


<div className={styles.plus}>בנוסף..</div>
<div className={styles.more}>לאחר שריון הצילומים תקבלו הצעות לסגנון לבוש מומלץ וגוונים התואמים את הלוקיישן שנבחר ביחד , את הלוקיישן נבחר ע''פ העדפה ישית וע''פ עונות השנה <br/> *יש לשריין תאריך כחודשיים מראש* <br/> הצילומים נערכים מאזור הצפון עד אזור המרכז</div>
<Button text="מיכל ,התרשמתי ,בואי נדבר" icon={premium}/>
</>


}
export default PregnentMehiron