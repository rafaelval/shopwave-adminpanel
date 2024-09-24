import React from "react";
import styles from "./LoginAdvice.module.css";
import LoginButton from "../LoginButton/LoginButton";
export const LoginAdvice = () => {
  return (
    <div className={styles.contPrinc}>
      Ingrese con sus datos para empezar
      <br />
      <LoginButton />
    </div>
  );
};
