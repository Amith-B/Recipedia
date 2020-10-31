import React, { useEffect } from "react";
//import { Link } from "react-router-dom";

function Register({ transition }) {
  useEffect(transition, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className={"login"}>
      <div className={"form"}>
        <p className="heading"> Register</p>
        <input className="input" type="text" placeholder="Username" />
        <input className="input" type="text" placeholder="email" />
        <input className="input" type="password" placeholder="password" />
        <input className="input" type="button" value="Register" />
      </div>
    </div>
  );
}

export default Register;
