import React from 'react'
import styles from '../styles/Button.module.css'

type ButtonProps={
    label:string
}

const Button = ({label}:ButtonProps) => {
  return (
    <button className={styles.ctabtn}>{label}</button>
  )
}

export default Button