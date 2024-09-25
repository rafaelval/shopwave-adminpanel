import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import store from "./redux/store";

const domain = process.env.REACT_APP_DOMAIN;
const clientId = process.env.REACT_APP_CLIENT_ID;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Auth0Provider>
  </Provider>
);
