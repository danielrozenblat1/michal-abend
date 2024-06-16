import styles from "./FirstScreen.module.css"


const FirstScreen=(props)=>{
   

return <>
<div className={props.scrolled ? styles.titleP : styles.title}>מיכל אבנד</div>
{/* תמונה */}
<div className={styles.description}>ילדים | הריון | בת מצווה | משפחות</div>
</>


}
export default FirstScreen