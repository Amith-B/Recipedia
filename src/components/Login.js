import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function LoginOrRegister({ transition, ...props }) {
  useEffect(transition, []); // eslint-disable-line react-hooks/exhaustive-deps

  // setTimeout(() => props.history.push("/register"), 3000);

  return (
    <div className={"login"}>
      <div className={"form"}>
        <p className="heading"> Login</p>
        <input className="input" type="text" placeholder="email" />
        <input className="input" type="password" placeholder="password" />
        <input className="input" type="button" value="Login" />

        <p className="registerpara">
          Haven't registered yet? No worries , register with your new acccount
          by clicking below button
        </p>
        <div className="registerdiv">
          <Link to="/register" className="register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginOrRegister;
