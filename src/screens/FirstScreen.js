import styles from "./FirstScreen.module.css"


const FirstScreen=(props)=>{
   

return <>
<div className={props.scrolled ? styles.titleP :styles.title}><div className={styles.bold}>להרגיש חופשי</div> מול המצלמה</div>
{/* תמונה */}
<div className={styles.description}>ילדים | הריון | בת מצווה | משפחות</div>
</>


}
export default FirstScreen