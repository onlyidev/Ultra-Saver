import React, { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";

function Login() {

  const [user, setUser] = useState({});

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
    document.getElementById("signInDiv").hidden = true;  // hides log in button when logged on
    var userObject = jwt_decode(response.credential);    // decodes jwt token
    setUser(userObject);  
    console.log("JWT ID Token: " + response.credential);
    console.log(userObject);
  }

  function HandleLogOut(event) {   // handles logging out
    setUser({});   // deletes user data
    document.getElementById("signInDiv").hidden = false; //shows log in button when logged out
  }

  return (
    <div>
        <h1 id="tabelLabel" >Login</h1>
        <p>This component demonstrates the log in through google functionality.</p>
        <div id="signInDiv"></div> 
        { Object.keys(user).length !== 0 &&  // This div only shows up when user data is registered
          <div>
            <p>Signed in as: {user.name}</p>
            <p>Email: {user.email}</p>
            <button onClick={(e) => HandleLogOut(e)}>Sign Out</button>  
          </div>
        }    
    </div>

  );
}

export default Login;