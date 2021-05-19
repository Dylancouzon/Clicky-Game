import React from "react";

function Navbar(props) {
  return (<nav className="navbar fixed-top  navbar-light bg-light">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">Flag Game</span>
    <span className="navbar-brand mb-0 h1">Score: {props.score || 0}</span>
    <span className="navbar-brand mb-0 h1">Top-score: {props.topscore || 0}</span>
  </div>
</nav>
  );
}

export default Navbar;
