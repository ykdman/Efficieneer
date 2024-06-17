import React from "react";
import { Link } from "react-router-dom";

function MainTitle() {
  return (
    <Link to="/">
      <h1 className="text-4xl p-0 m-0">Efficieneer</h1>
    </Link>
  );
}

export default MainTitle;
