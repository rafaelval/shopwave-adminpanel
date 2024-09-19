import React from "react";
import styles from "./Header.module.css";
import LogoutButton from "../LogoutButton/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
export const Header = () => {
  const { user } = useAuth0();
  return (
    <div className={styles.contPrinc}>
      <div className={styles.infoCont}>
        <img src={user.picture} alt={user.name} />
        <div className={styles.info}>
          <span>{user.name}</span>
          <span>{user.email}</span>
        </div>
      </div>
<LogoutButton /> 
    </div>
  );
};
