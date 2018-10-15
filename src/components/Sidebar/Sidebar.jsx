import "./Sidebar.css";

import { Link } from "react-router-dom";
import React from "react";

export default function Sidebar({ items }) {
  let els = [];
  for (let item of items) {
    els.push(
      <div
        key={item.name}
        className={"sidebar-item" + (item.bottom ? " bottom" : "")}
      >
        <Link to={item.location}>{item.name}</Link>
      </div>
    );
  }
  return <div className="sidebar">{els}</div>;
}
