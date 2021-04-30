import React, { useEffect } from "react";
import * as d3 from "d3";
import "./chartStyles.scss";
import moment from "moment";

const LineChart = ({ id, color }) => {
  let data = [];
  let startdate = moment().subtract(60, "days").utc();

  for (let i = 0; i < 60; i++) {
    data.push({
      date: moment()
        .add(-60 + i, "days")
        .utc(),
      value: Math.ceil(Math.random() * (5 - 40) + 40),
    });
  }

  useEffect(() => {
    draw();
  });

  let draw = () => {
    d3.select("#lineChart" + id)
      .select("svg")
      .remove();

    let width = 340;
    let height = 280;
    let margin = { left: 40, right: 20, top: 10, bottom: 20 };

    let svg = d3
      .select("#lineChart" + id)
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
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    let xScale = d3
      .scaleTime()
      .domain([
        startdate.valueOf(),
        moment().subtract(1, "days").utc().valueOf(),
      ])
      .range([0, width])
      .nice();

    let yScale = d3.scaleLinear().domain([0, 50]).range([height, 0]);

    svg
      .append("g")
      .style("opacity", 0.5)
      .call(d3.axisLeft(yScale).ticks(5).tickSize(0))
      .call((g) => g.select(".domain").remove());

    svg
      .append("g")
      .style("opacity", 0.5)
      .call(d3.axisBottom(xScale).ticks(4).tickSize(0).tickPadding(10))
      .attr("transform", `translate(0, ${height})`)
      .call((g) => g.select(".domain").remove());

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", color)
      .attr("stroke-width", 3)
      .attr(
        "d",
        d3
          .line()
          .x((d) => {
            return xScale(d.date);
          })
          .y((d) => {
            return yScale(d.value);
          })
          .curve(d3.curveCardinal.tension(0.5))
      );
  };

  return <div className={"chart"} id={"lineChart" + id}></div>;
};

export default LineChart;
