import React from 'react'
import styles from './Navbar.module.css';
function Navbar() {
  return (

    <nav className={styles.navbar}>
    <div className={styles['navbar-logo']}>
       <h2 className={styles.logo}>Resume Builder</h2>
    </div>
   
</nav>
  )
}

export default Navbar