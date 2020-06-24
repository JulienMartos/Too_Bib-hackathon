import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div className="container-fluid">
      <div className="row">
        <h1 className="col-10 ">TITRE</h1>
        <img className="col-2" src="../logo192.png" alt="logo" />
      </div>
    </div>
  );
}

export default Header;
