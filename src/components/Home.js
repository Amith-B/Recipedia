import React, { useEffect } from "react";

function Home({ hideSearch, transition }) {
  useEffect(transition, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(hideSearch, []); // eslint-disable-line react-hooks/exhaustive-deps
  return <div style={{ color: "white" }}>Home Component</div>;
}

export default Home;
