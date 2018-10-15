import React from "react";

export default function Navbar({ name = "concerto.ml" }) {
  return (
    <div className="navbar">
      <div className="right">
        <span className="primary">{name}</span>
      </div>
    </div>
  );
}
