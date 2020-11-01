import React from "react";
import load from "../assets/loading.gif";
import "./Loading.css";

function Loading(props) {
  return (
    <div className={"pageLoading"}>
      <img alt={"Loading"} src={load} />
    </div>
  );
}

export default Loading;
