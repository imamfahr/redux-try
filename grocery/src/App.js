import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GoogleLogin from 'react-google-login'

function App() {
  return (
    <div className="App">
      <h1>React redux app grocery using google login</h1>
      <GoogleLogin
        clientId="824074026863-liq7i9p0tjg3uuioel4tutfe3l6p4ea7.apps.googleusercontent.com"
        render={(renderProps) => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
            This is my custom Google button
          </button>
        )}
        buttonText="Login"
        // onSuccess={responseGoogle}
        // onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default App;
