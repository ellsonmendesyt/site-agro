import React from 'react'
import styles from '../styles/SectionDivider.module.css'

type DividerProps={
  title:string;
  hilite:string;
}
const SectionDivider = ({title,hilite}:DividerProps) => {
  return (
    <div className={styles.sectionDivider}>
    <h1 className={styles.title} >{title}    <span className={styles.hilite}>{hilite}</span></h1>
  </div>
  )
}

export default SectionDivider