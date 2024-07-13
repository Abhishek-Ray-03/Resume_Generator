import React from 'react'
import styles from './Header.module.css'
import Navbar from '../Navbar/Navbar'
function Header() {
  return (
    <div>
     <Navbar/>
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
         Crafting Your <span>Perfect</span> Resume for a <span>Brighter</span> Tomorrow!
        </p>
        <hr />
        <p className={styles.heading}>
        Create. Impress. <span>Succeed..</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ9oeSPoo67uiPDtUlj52TLkqnYurGRqfPwg&s' alt="Resume" />
      </div>
    </div>
    </div>
  )
}

export default Header;