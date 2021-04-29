import React from "react";
import "./styles.scss";

const Main = () => {
  return (
    <div className="main">
      <div className="w-side">
        <div className="side-container">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="w-content">
        <div className="center-container">
          <div className="legand"></div>
          <div className="content-chart"></div>
        </div>
        <div className="center-container">
          <div className="legand"></div>
          <div className="content-chart"></div>
        </div>
      </div>
      <div className="w-content">
        <div className="center-container">
          <div className="legand"></div>
          <div className="content-chart"></div>
        </div>
        <div className="center-container">
          <div className="legand"></div>
          <div className="content-chart"></div>
        </div>
      </div>
      <div className="w-content">
        <div className="center-container">
          <div className="legand"></div>
          <div className="content-chart"></div>
        </div>
        <div className="center-container">
          <div className="legand"></div>
          <div className="content-chart"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
