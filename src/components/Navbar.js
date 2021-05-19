import React from "react";

function Navbar({values}) {
  const scorestatus = "Score: " + values.score;
  return (<nav className="navbar fixed-top  navbar-light bg-light">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">Flag Game</span>
    <span className="navbar-brand mb-0 h1">{values.score? scorestatus: values.status}</span>
    <span className="navbar-brand mb-0 h1">Top-score: {values.topScore || 0}</span>
  </div>
</nav>
  );
}

export default Navbar;
