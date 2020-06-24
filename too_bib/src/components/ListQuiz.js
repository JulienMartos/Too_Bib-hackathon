import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function ListQuiz() {
  return (
    <div className="container-fluid">
      <div className="row">
        <h2>Que ce passe t'il?</h2>
      </div>
      <Link to={""}>
        <button>Perte de connaissance</button>
      </Link>
      <Link to={"/Questionnaires/brulure"}>
        <button>Brûlure</button>
      </Link>
      <Link to={""}>
        <button>Saignements</button>
      </Link>
    </div>
  );
}

export default ListQuiz;
