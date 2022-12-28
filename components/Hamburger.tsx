import React from 'react'
import styles from '../styles/Hamburger.module.css'

type HamburgerProps={
 toggle:()=>void,
 active:boolean,
 className?:string

}
const Hamburger = ({toggle,active,className=''}:HamburgerProps) => {
  return (
    <div className={className}>

    <button onClick={()=>{
        toggle();
    }} className={ active===true?styles.toggleOpen: styles.toggleClose} >
    <span className={styles.line}></span>
    <span className={styles.line}></span>
    <span className={styles.line}></span>
    
</button>
    </div>
  )
}

export default Hamburger