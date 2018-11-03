import "./Projects.css";

import { Link } from "react-router-dom";
import Page from "../Page/Page";
import React from "react";
import projects from "../../ProjectService.js";

export default function Projects() {
  let colors = `
  #00bf72,
  #00b8c1,
  #00a5ff,
  #437fff,
  #cc3eb6`
    .split(",")
    .map(i => i.trim());

  function randomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  let p = [];
  for (let project of projects) {
    p.push(
      <div
        className="project card"
        style={{ backgroundColor: randomElement(colors) }}
      >
        <div className="name">
          <h3>{project.name}</h3>
        </div>
        <div className="description">{project.description}</div>

        <Link to={`/projects/${project.id}`} className="button">
          View
        </Link>
      </div>
    );
  }
  return (
    <div>
      <div className="featured">{p}</div>
      <div className="new" />
    </div>
  );
}
