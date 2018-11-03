import React from "react";

export default function Navbar({ name = "concerto.ml", title = "" }) {
  return (
    <div className="navbar">
      <div className="left">
        <h3>{title}</h3>
      </div>
      <div className="right">
        <span className="primary">{name}</span>
      </div>
    </div>
  );
}
