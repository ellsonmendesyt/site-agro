import React from 'react'
import styles from "../styles/Vitrine.module.css"

type VitrineProps={
    reverse?:boolean;
    image?:string;
    title?:string;
    text?:string;
    cta?:string;
}
// style={{flexDirection:reverse==true?'row-reverse':'row'}}
const Vitrine = ({reverse=false,image,title,text,cta}:VitrineProps) => {
  return (
    
    <div className={styles.container}>
      <div className={styles.row}  >
        <div className={styles.textCol} style={{order:reverse==true?1:0}}>
            <h3 className={styles.maintitle}>{title}</h3>
            <p className={styles.text}>{text} </p>
            <button className={styles.ctabtn}>Saiba mais</button>
        </div>
        <div className={styles.fullImgCol}> <img  src={`/${image}`} alt="imagem" /> </div>
      </div>
    </div>
  
  )
}

export default Vitrine