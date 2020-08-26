import React from 'react';
import logo from './logo.svg';
import './App.css';
import Keycloak from "keycloak-js";

function App() {

  const keycloakConfig = {
    url: "http://localhost:8080/auth/",
    realm: "demo",
    clientId: "react-app-keycloak"
  }
  const keycloak = new Keycloak(keycloakConfig)

  keycloak.init({
    onLoad: "login-required"
  }).then((response) => {
    console.log("success");
    console.log(response);
  }).catch(reason => console.log(reason));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
