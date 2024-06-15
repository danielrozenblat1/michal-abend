import styles from "./ForthScreen.module.css"
import { useEffect, useRef } from "react"
import focus from "../icons/wired-lineal-753-shutter-photo-picture.json"
import { Player } from "@lordicon/react"
import ScrollReveal from "scrollreveal"
import experience from "../icons/wired-lineal-977-internship (1).json"
import newThing from "../icons/wired-lineal-1437-photo-editor.json"
import nature from "../icons/wired-lineal-637-girl-boy-standing-sun-happy.json"
import family from "../icons/wired-lineal-1529-parenting-parents-family.json"
import polaroid from "../icons/wired-lineal-1035-polaroid-camera (1).json"
import Button from "../components/NavBar/button/Button"
const ThirdScreen=()=>{
    const playerRef1=useRef()
    const playerRef2=useRef()
    const playerRef3=useRef()
    const playerRef4=useRef()
    const playerRef5=useRef()
    useEffect(()=>{

        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 1000,
            distance: "30px",
            origin: "top", // Start from the right side
            easing: "ease-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
          ScrollReveal().reveal(`.${styles.section}`, {
              duration: 1000,
              distance: "30px",
              origin: "right", // Start from the right side
              easing: "ease-in-out",
              reset:false,
              viewFactor: 0.2,
              interval: 300, // Delay between each element
              delay: 200, // Delay before the animation starts
              scale: 1, // Set scale to 1 or null
            });
            ScrollReveal().reveal(`.${styles.stepHeader}`, {
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
        playerRef4.current?.playFromBeginning();    
        playerRef5.current?.playFromBeginning();  
    },[])
 
      return  <> <div className={styles.background} itemscope itemtype="https://schema.org/Person">
            <div className={styles.title} itemprop="name">תחומי המומחיות שלי</div>
            <div className={styles.bigWrapper}>
              <div className={styles.step} itemscope itemtype="https://schema.org/Organization">
                <div className={styles.icons}>
                  <Player ref={playerRef1} size="100%" onComplete={() => playerRef1.current?.playFromBeginning()} icon={newThing} />
                </div>
                <div className={styles.text}>
                  <div className={styles.stepHeader} itemprop="name">איכות צילומים</div>
                  <div className={styles.section} itemprop="description">צילומים איכותיים ומותאמים אישית. איך מותאמת אישית? לפני הצילומים יש שיחה וייעוץ סטיילינג, אני מבינה איך להתאים את התמונה לאורח החיים ולסגנון המשפחה</div>
                </div>
              </div>
              {/* חץ לשלב הבא */}
    
              <div className={styles.step} itemscope itemtype="https://schema.org/Product">
                <div className={styles.text}>
                  <div className={styles.stepHeader} itemprop="name">נסיון ומומחיות</div>
                  <div className={styles.section} itemprop="description"> למדתי את טכניקות הצילום, אני מכירה ועובדת עם התאורה המתאימה ביותר כדי ליצור תמונות קסומות, כלומר אני מצלמת כשעה וחצי לפני שקיעה.</div>
                </div>
                <div className={styles.icons}>
                  <Player ref={playerRef2} delay={500} size="100%" onComplete={() => playerRef2.current?.playFromBeginning()} icon={experience} />
                </div>
              </div>
    
              {/* חץ לשלב הבא */}
    
              <div className={styles.step} itemscope itemtype="https://schema.org/Organization">
                <div className={styles.icons}>
                  <Player ref={playerRef3} size="100%" onComplete={() =>playerRef3.current?.playFromBeginning()} icon={nature} />
                </div>
                <div className={styles.text}>
                  <div className={styles.stepHeader} itemprop="name">יצירת חוויה</div>
                  <div className={styles.section} itemprop="description">אני אחראית ליצור חווית צילום משפחתית מהנה ומיוחדת. ברוב המקרים אני כמו זבוב על הקיר כדי לתעד את הרגעים האמיתיים והמרגשים של המשפחה באופן מקצועי. אני מאפשרת למצולמים להתרכז בחוויה ולהיות חלק ממנה.</div>
                </div>
              </div>
    
              <div className={styles.step} itemscope itemtype="https://schema.org/Organization">
                <div className={styles.text}>
                  <div className={styles.stepHeader} itemprop="name">זיכרון לשנים</div>
                  <div className={styles.section} itemprop="description">צילומים מקצועיים מהווים זיכרון שימשיך לשנים רבות. הם מספקים את האפשרות להחזיר את עצמכם בזמן, לשתף עם משפחה וחברים ולשמור את הרגעים הייחודיים ביותר</div>
                </div>
                <div className={styles.icons}>
                  <Player ref={playerRef4} delay={500} size="100%" onComplete={() => playerRef4.current?.playFromBeginning()} icon={polaroid} />
                </div>
              </div>
    
              <div className={styles.step} itemscope itemtype="https://schema.org/Course">
                <div className={styles.icons}>
                  <Player ref={playerRef5} size="100%" onComplete={() => playerRef5.current?.playFromBeginning()} icon={family} />
                </div>
                <div className={styles.text}>
                  <div className={styles.stepHeader} itemprop="name">יצירת ערך מוסף</div>
                  <div className={styles.section} itemprop="description">צילומי משפחה מקצועיים באיכות כזו שהם מאפשרים להדפיס תמונות ולעצב אלבומים מרהיבים שישמרו את הזכרון לדורות</div>
                </div>
              </div>
            </div>

          </div>
          <Button text="לחץ כאן לעוד פרטים" icon={focus} message="היי מיכל, אשמח לשמוע עוד על השירותים שאת מציעה"/>
        </>
}
export default ThirdScreen