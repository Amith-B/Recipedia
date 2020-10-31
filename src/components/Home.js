import React, { useEffect } from "react";
import "./Home.css";

function Home({ hideSearch, transition }) {
  useEffect(transition, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(hideSearch, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className={"introContainer"}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          overflowY: "visible",
        }}
      >
        <div className={"foodIntroImage"}></div>
        <div
          style={{
            flex: "50%",
            fontWeight: "bold",
            fontSize: "2em",
            color: "#444",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1em",
            margin: "1em",
          }}
        >
          This is a place where you can get recipes along with their
          instructions and ingredients. There are 1000+ recipes in here which
          are from all over the word. Follow the recipe tab at the top to get
          the list of recipes, and also you can search recipes.
        </div>
      </div>
    </div>
  );
}

export default Home;
