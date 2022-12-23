import React from 'react'
import styles from '../styles/Row2Col.module.css'



type Row2ColProps={
    children:React.ReactNode,
    max:number
}

const Row2Col = ({children,max}:Row2ColProps) => {
  return (
    <div style={{maxWidth:max+'px',margin:'0px auto'}} className={styles.grid}>{children}</div>
  )
}

export default Row2Col