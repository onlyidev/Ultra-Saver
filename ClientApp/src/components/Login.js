import React, { useEffect } from 'react';

function Login() {

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "929531042172-l5h1hbegcb3qm6nkpg1r7m4aa6seb98n.apps.googleusercontent.com",
      callback: HandleCallback
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "Large"}
    );
  }, []);


  function HandleCallback(response) { // function called when user successfully logs in
    console.log("JWT ID Token: " + response.credential);
  }

  return (
    <div>
        <h1 id="tabelLabel" >Login</h1>
        <p>This component demonstrates the log in through google functionality.</p>
        <div id="signInDiv"></div>
      </div>
  );
}

export default Login;