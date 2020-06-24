import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Link to={"/questionnaire"}>
          <button onClick="">j'ai besoin d'aide</button>
        </Link>
        <button>simulation</button>
      </div>
    </div>
  );
}

export default Homepage;
