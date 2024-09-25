import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./LogoutButton.module.css";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div className={styles.contPrinc}>
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
