import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./wellcome.css";

function Wellcome() {
  const { loginWithRedirect } = useAuth0();
  return (
    <button onClick={() => loginWithRedirect()} className="login">
      <h1>MHot</h1>
      <img
        src="https://trello-attachments.s3.amazonaws.com/5f11b957273429681522af65/5f5755d3493d338105fdb51a/820079c5879eea8efb27cf32929db0d1/logo_ramon.png"
        alt="login logo"
      />
      <p>press the image to continue</p>
    </button>
  );
}
export default Wellcome;
