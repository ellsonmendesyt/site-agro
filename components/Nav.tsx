import React from 'react'

import styles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <div className={styles.navWrapper}>
  <div className={styles.gradBar}></div>
  <nav className={styles.navbar}>
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Bluestar_%28bus_company%29_logo.svg/1280px-Bluestar_%28bus_company%29_logo.svg.png" alt="Company Logo"/>
    <div className="menu-toggle" id="mobile-menu">
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </div>
    <ul className="nav no-search">
      <li className={styles.navItem}><a href="#">Home</a></li>
      <li className={styles.navItem}><a href="#">About</a></li>
      <li className={styles.navItem}><a href="#">Work</a></li>
      <li className={styles.navItem}><a href="#">Careers</a></li>
      <li className={styles.navItem}><a href="#">Contact Us</a></li>
    </ul>
  </nav>
  </div>
  )
}

export default Nav