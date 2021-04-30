import React, { useEffect } from "react";
import * as d3 from "d3";

const GaugeChart = ({ id, chartName }) => {
  useEffect(() => {
    draw();
  });

  let draw = () => {
    d3.select("#gauge_chart_" + id)
      .select("svg")
      .remove();

    let width = 200;
    let height = 115;
    let radius = 75;
    let margin = { left: 20, right: 20, top: 20, bottom: 20 };
    let value = d3.randomInt(5, 100)();

    let svg = d3
      .select("#gauge_chart_" + id)
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr(
        "viewBox",
        `0 0 ${width + margin.left + margin.right} ${
          height + margin.top + margin.bottom
        }`
      )
      .append("g")
      .attr(
        "transform",
        `translate(${width / 2 + margin.left}, ${height / 1.5 + margin.top})`
      );

    svg
      .append("path")
      .attr(
        "d",
        d3
          .arc()
          .innerRadius(radius * 0.7)
          .outerRadius(radius)
          .startAngle(-Math.PI / 2)
          .endAngle(Math.PI / 2)
      )
      .attr("fill", "#f0f0f0");

    svg
      .append("path")
      .attr(
        "d",
        d3
          .arc()
          .innerRadius(radius * 0.7)
          .outerRadius(radius)
          .startAngle(-Math.PI / 2)
          .endAngle(-Math.PI / 2 + (value * Math.PI) / 100)
      )
      .attr("fill", '#e15759');

    svg
      .append("text")
      .attr("x", 0)
      .attr("y", 0)
      .text(value + "%")
      .style("font-size", 12)
      .attr("text-anchor", "middle");

    svg
      .append("text")
      .attr("x", 0)
      .attr("y", 15)
      .text(chartName)
      .style("font-size", 12)
      .attr("text-anchor", "middle");
  };

  return <div id={"gauge_chart_" + id}></div>;
};

export default GaugeChart;
