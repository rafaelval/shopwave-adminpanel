import React from "react";
import styles from './Navbar.module.css'
import logo from '../../logo.png'

export const Navbar = () => {
  return (
    <div className={styles.contPrinc}>
      <img src={logo} className={styles.logo} alt="logo"/>
      <ul>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
      </ul>
    </div>
  );
};
