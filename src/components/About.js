import React, { useEffect } from "react";
import "./About.css";

function About({ transition, hideSearch }) {
  //   useEffect(transition, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(hideSearch, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className={"profile"}>
      <div className={"profileImage"}></div>
      <p>
        Developed By Amith B
        <br />
        Gmail: amithbr6@gmail.com
      </p>
    </div>
  );
}

export default About;
