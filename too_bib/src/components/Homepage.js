import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Link to={"/questionnaires"}>
          <button>j'ai besoin d'aide</button>
        </Link>
        <Link to={""}>
          <button>simulation</button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
