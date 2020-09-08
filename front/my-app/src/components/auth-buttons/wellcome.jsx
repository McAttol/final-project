import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./wellcome.css";

function Wellcome() {
  const { loginWithRedirect } = useAuth0();
  return (
    <button onClick={() => loginWithRedirect()} className="login">
      <h1>MHot</h1>
      <img
        src="https://trello-attachments.s3.amazonaws.com/5f11b957273429681522af65/5f5755d3493d338105fdb51a/c1d3afdc8df0166775603419085da7ae/logo_ramon.jpg"
        alt="login logo"
      />
      <p>press the image to continue</p>
    </button>
  );
}
export default Wellcome;
