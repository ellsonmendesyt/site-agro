import React from 'react'
import styles from '../styles/Presentation.module.css'

type PresentationProps={
    text?:string;
    author?:string;
    lead?:string;
    hilite?:string;
}

const Presentation = ({text="defina o texto",author="defina o autor",lead="defina o texto principal",hilite="defina o destaque"}:PresentationProps) => {
  return (
    <div className={styles.container}>

    <div className={styles.row2col}>
      <div className={styles.left}>
        <div className={styles.leadbox}>
        <h1 className={styles.lead}>{lead} <span className={styles.hilite}>{hilite} </span> .</h1>

        <div className={styles.animals}>
           <img src="/porco.png" alt="porco" />
           <img src="/cabra.png" alt="cabra" />
           <img src="/bode.png" alt="bode" />
        </div>
        </div>
      </div>
    <div className={styles.right}>

     <div className={styles.quotebox}>
        <div className={styles.citation}>
            <div className={styles.leftquote}><img src="/leftquote.png" alt="leftquote" /></div>
            {/* <span className={styles.startquote}></span> */}
            <p className={styles.quote}>{text} </p>
            <div className={styles.rightquote}><img src="/rightquote.png" alt="rightquote" /></div>
        </div>
      {/* <span className={styles.endquote}></span> */}
         <h3 className={styles.quoteauthor}>{author} </h3>
     </div>
    </div>
    </div>

    
  </div>
  )
}

export default Presentation