import "./SystemInfo.css";

import React, { Component } from "react";

import Page from "../Page/Page";

const si = window.require("systeminformation");
const bytes = window.require("bytes");

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default class SystemInfo extends Component {
  constructor() {
    super();
    this.state = { cpu: "", graphics: { controllers: "" }, memory: "" };
    console.log("init");
    console.log(si);

    si.cpu()
      .then(data => {
        this.setState({ cpu: data });
        console.log(data);
      })
      .catch(error => console.error(error));

    si.graphics()
      .then(data => {
        this.setState({ graphics: data });
        console.log(data);
      })
      .catch(error => console.error(error));

    si.mem()
      .then(data => {
        this.setState({ memory: data });
        console.log(data);
      })
      .catch(error => console.error(error));

    si.osInfo()
      .then(data => {
        this.setState({ osInfo: data });
        console.log(data);
      })
      .catch(error => console.error(error));

    si.fsSize()
      .then(data => {
        this.setState({ fsSize: data });
        console.log(data);
      })
      .catch(error => console.error(error));
  }
  render() {
    let categories = [
      { name: "CPU", data: [this.state.cpu] },
      { name: "GPU", data: this.state.graphics.controllers },
      { name: "Memory", data: [this.state.memory], transform: i => bytes(i) },
      { name: "OS", data: [this.state.osInfo] },
      {
        name: "Filesystem",
        data: this.state.fsSize,
        transform: i => {
          if (typeof i == "number") {
            return bytes(i);
          } else {
            return i;
          }
        }
      }
    ];
    let c = [];
    for (let cat of categories) {
      let d = [];
      if (!cat.data) {
        break;
      }
      for (let [idx, item] of cat.data.entries()) {
        console.log(item);

        if (!item) {
          break;
        }
        for (let value in item) {
          if (
            typeof item[value] != "string" &&
            typeof item[value] != "number"
          ) {
            break;
          }
          d.push(
            <div className="detail" key={value + item[value]}>
              <div className="name">{capitalizeFirstLetter(value)}:</div>
              <div className="val">
                {cat.transform ? cat.transform(item[value]) : item[value]}
              </div>
            </div>
          );
        }
        c.push(
          <div className="value" key={cat.name + " - " + idx}>
            <div className="title">
              <h3 className="title">{cat.name} &nbsp;</h3>
              <h3 className="right">#{idx + 1}</h3>
            </div>
            <div className="details">{d}</div>
          </div>
        );
        d = [];
      }
    }
    return <Page>{c}</Page>;
  }
}
