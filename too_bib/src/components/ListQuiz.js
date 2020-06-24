import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ListQuiz() {
  return (
    <div className="container-fluid">
      <div className="row">
        <h2>Que ce passe t'il?</h2>
      </div>
      <button onClick="">Perte de connaissance</button>
      <button onClick="">Brûlure</button>
      <button onClick="">Saignements</button>
    </div>
  );
}

export default ListQuiz;
