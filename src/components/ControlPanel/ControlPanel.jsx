import React from "react";
import styles from "./ControlPanel.module.css";
import { Navbar } from "../Navbar/Navbar";
import { Header } from "../Header/Header";

export const ControlPanel = () => {
  return (
    <div className={styles.contPrinc}>
      <Navbar />
      <Header />
    </div>
  );
};
