import React from "react";
import styles from "./ControlPanel.module.css";
import { Navbar } from "../Navbar/Navbar";
import { Header } from "../Header/Header";
import { AllProducts } from "../AllProducts/AllProducts";

export const ControlPanel = () => {
  return (
    <div className={styles.contPrinc}>
      <Navbar />
      <div className={styles.right}>
      <Header />
      <AllProducts/>
      </div>
    </div>
  );
};
