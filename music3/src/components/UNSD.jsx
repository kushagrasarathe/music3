import React, { useState } from "react";
import UAuth from "@uauth/js";
import { Button} from "react-bootstrap";

const uauth = new UAuth({
  clientID: "aee17cc7-eb35-4e18-809f-cf6ca4880176",
  redirectUri: "https://music3.vercel.app/",
});

function UDomain() {
  const [Uauth, setUauth] = useState();

  async function Connect() {
    try {
      const authorization = await uauth.loginWithPopup();
      setUauth(JSON.parse(JSON.stringify(authorization))["idToken"]);

      await authenticate();
    } catch (error) {
      console.error(error);
    }
  }

  async function logOut() {
    uauth.logout();
    logout();
  }

  function log() {
    if (Uauth === null || Uauth === undefined) {
      Connect();
    } else {
      logOut();
    }
  }

  return (
    <>
      <Button onClick={log} >
        {Uauth != null
          ? Uauth["sub"]
          : "Login with UNSD"}
      </Button>
    </>
  );
}

export default UDomain;