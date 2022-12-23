import React from 'react'
import styles from '../styles/SimpleCard.module.css'

type SimpleCardProps={
    title:string;
    text:string;
    children:React.ReactNode;
}

const SimpleCard = ({children,text,title}:SimpleCardProps) => {
  return (
    <div>
     {children}
    </div>
  )
}

export default SimpleCard