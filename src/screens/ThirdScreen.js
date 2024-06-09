import styles from "./ThirdScreen.module.css"
import { Player } from "@lordicon/react"
import check from "../icons/wired-lineal-284-avatar-man-approved.json"
import { useRef } from "react"

const ThirdScreen=()=>{
    const playerRef1=useRef(null);


    const handleComplete = () => {
        setTimeout(() => {
          playerRef1?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
      };

return <>

<div className={styles.title}>זה לא חייב להיות המקרה אצלך !</div>

<div className={styles.title}>לא האמנתי לך = לא קניתי ממך</div>
{/* <div className={styles.icon}>
    <Player ref={playerRef2} icon={judge} size="100%" onComplete={handleComplete2}/>
</div> */}



<div className={styles.title}>לכן המצב שנוצר הוא</div>
<div className={styles.subTitle}>שאם אתה לא מצטייר כמיוחד - אף אחד לא ימצא סיבה לעבוד דווקא איתך</div>


<div className={styles.title}>שמים סוף לחוסר הוודאות</div>
<div className={styles.subTitle}>מסקפטיות לאמון</div>
<div className={styles.icon}>
    <Player ref={playerRef1} icon={check} size="100%" onComplete={handleComplete}/>
</div>

<div className={styles.claim}>"איך אני גורם לאדם שמגיע מהשיווק שלי לתת <div className={styles.bold}>דווקא בי</div> אמון למרות שיש לי אלפי מתחרים"</div>


</>


}
export default ThirdScreen