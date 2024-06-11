import { useEffect, useRef } from "react"
import styles from "./Button.module.css"
import { Player } from "@lordicon/react"
const Button=(props)=>{
    const playerRef1=useRef(null)
    useEffect(()=>{

   
    playerRef1?.current?.playFromBeginning()
},[])
const handleComplete = () => {
    setTimeout(() => {
      playerRef1?.current?.playFromBeginning();
    }, 2000); // play again after 2.5 seconds
  };

return <>

<div className={styles.wrap}>
{/* <div className={styles.icon}><Player icon={props.icon} size="100%" onComplete={handleComplete} ref={playerRef1}/></div> */}
<div className={styles.text}>{props.text}</div>
</div>
</>
}
export default Button