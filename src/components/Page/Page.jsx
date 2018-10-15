import Navbar from "../Navbar/Navbar";
import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import routes from "../../routes";

export default function Page({ children }) {
  return (
    <div className="page split">
      <Sidebar className="left" items={routes} />
      <div className="main right">
        <Navbar />

        <div className="content">{children}</div>
      </div>
    </div>
  );
}
