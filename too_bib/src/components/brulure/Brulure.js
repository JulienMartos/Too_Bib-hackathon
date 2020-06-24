import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Brulure() {
  return (
    <div className="container-fluid">
      <div className="row">
        <h2>BRULURE</h2>
      </div>
      <div>
        <div>
          <h3>la brûlure a t-elle des cloques?</h3>
        </div>
        <div>
          <Link to={""}>
            <button>oui</button>
          </Link>
          <Link to={""}>
            <button>non</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Brulure;
