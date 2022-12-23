import React from 'react'
import styles from "../styles/Navbar.module.css";

import Link from 'next/link';
import Image from "next/image"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.logobox}>
            <img className={styles.logo} src="/logo.png"  alt="logo" />
        </div>
        <ul className={styles.navbarlist}>
            <li> <Link style={{color:'#008037',fontWeight:'bold'}} className={styles.navLink} href="">Inicio</Link></li>
            <li> <Link className={styles.navLink} href="">Quem somos</Link></li>
            <li> <Link className={styles.navLink} href="">soluções</Link></li>
            <li> <Link className={styles.navLink} href="">noticias</Link></li>
            <li> <Link className={styles.navLink} href="">videos</Link></li>
            <li> <Link className={styles.navLink} href="">contato</Link></li>
            
        </ul>
    </nav>
  )
}

export default Navbar