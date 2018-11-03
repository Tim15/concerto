import Navbar from "../Navbar/Navbar";
import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { spec } from "../../routes";

export default function Page({ children, name = "" }) {
  return (
    <div className="page split">
      <Sidebar className="left" items={spec} />
      <div className="main right">
        <Navbar title={name} />

        <div className="content">{children}</div>
      </div>
    </div>
  );
}
