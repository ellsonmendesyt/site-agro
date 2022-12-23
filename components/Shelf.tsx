import React from 'react'
import styles from '../styles/Shelf.module.css'

type ShelfProps={
    children:React.ReactNode;
}
const Shelf = ({children}:ShelfProps) => {
  return (
    <div className={styles.shelf}>{children}</div>
  )
}

export default Shelf