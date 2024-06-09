import styles from "./SecondScreen.module.css"
import michal from "../images/מיכל לוגו.png"
const SecondScreen=()=>{


    return <>
    <div className={styles.title} id="קצת עלי">אז מי עומדת מאחורי העדשה?</div>
    <div className={styles.wrap}>
<div className={styles.center}><img className={styles.image} src={michal}/></div>
<div className={styles.column}>
<div className={styles.description}>מיכל אבנד</div>
<div className={styles.more}>"תמונה טובה מספרת סיפור ללא מילים"</div>
<div className={styles.explain}>על מנת לספר את הסיפור חשוב לראות את "הפריים הסופי" לפני שהתמונה צולמה. חשוב לראות שהכל משתלב ומתחבר, המצולמים, הרקע, הבעות הפנים ותחושות של הגוף.</div>
</div>
</div>
    </>
}
export default SecondScreen