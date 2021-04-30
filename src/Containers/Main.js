import React from "react";
import GaugeChart from "../Charts/GaugeChart";
import HorizontalBarChart from "../Charts/HorizontalBarChart";
import LineChart from "../Charts/LineChart";
import "./styles.scss";

const Main = () => {
  return (
    <div className="main">
      <div className="w-side">
        <div className="side-container">
          <div>
            <GaugeChart id="gauge_1" chartName="Corporate" />
          </div>
          <div>
            <GaugeChart id="gauge_2" chartName="Home Office" />
          </div>
          <div>
            <GaugeChart id="gauge_3" chartName="Small Business" />
          </div>
          <div>
            <GaugeChart id="gauge_4" chartName="Retail" />
          </div>
        </div>
      </div>
      <div className="w-content">
        <div className="center-container">
          <div className="legand">SALES</div>
          <div className="content-chart">
            <HorizontalBarChart id="1" />
          </div>
        </div>
        <div className="center-container">
          <div className="legand">SALES TREND</div>
          <div className="content-chart">
            <LineChart id="line_chart_1" color="#ed9230" />
          </div>
        </div>
      </div>
      <div className="w-content">
        <div className="center-container">
          <div className="legand">ORDER QUANTITY</div>
          <div className="content-chart">
            <HorizontalBarChart id="3" />
          </div>
        </div>
        <div className="center-container">
          <div className="legand">ORDER QUANTITY TREND</div>
          <div className="content-chart">
            <LineChart id="line_chart_2" color="#519c99" />
          </div>
        </div>
      </div>
      <div className="w-content">
        <div className="center-container">
          <div className="legand">SHIPPING COST</div>
          <div className="content-chart">
            <HorizontalBarChart id="2" />
          </div>
        </div>
        <div className="center-container">
          <div className="legand">SHIPPING COST TREND</div>
          <div className="content-chart">
            <LineChart id="line_chart_3" color="#75a1c8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
