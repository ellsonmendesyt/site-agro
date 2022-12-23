import React from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import styles from '../styles/Counter.module.css'





const Counter = ({end,title,text,duration=3,prefix='+'}) => {
const [counterOn,setCounterOn]=React.useState(false)

  return (
    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
    <div className={styles.counterContainer}>  
    <h3 className={styles.counter}>
        {
            counterOn && <CountUp prefix=' + ' end={end} duration={duration}/>
        }
      </h3>
        <p className={styles.title}>{title}</p>
        <p className={styles.text}>{text}</p>
    </div>
    </ScrollTrigger>
  )
}

export default Counter