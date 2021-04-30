import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import { appendSvg, scale } from "../Utils/d3functions";
import "./chartStyles.scss";

const HorizontalBarChart = ({ id }) => {
  useEffect(() => {
    draw();
    console.log(":::::::::: ", typeof id);
  });

  let draw = () => {
    d3.select("#h_bar_chart_" + id)
      .select("svg")
      .remove();

    let width = 340;
    let height = 280;
    let margin = { left: 40, right: 20, top: 10, bottom: 20 };
    let productNames = ["NSW", "VIC", "OLD", "SA", "ACT", "WA", "NT", "TAS"];

    let data = productNames.map((i) => ({
      product: i,
      sales: d3.randomInt(121874, 819936)(),
      quantity: d3.randomInt(1500, 13000)(),
      shipping: d3.randomInt(800, 6500)(),
    }));

    switch (id) {
      case "1": {
        data = data.sort((a, b) =>
          a.sales > b.sales ? 1 : b.sales > a.sales ? -1 : 0
        );
        break
      }
      case "2": {
        data = data.sort((a, b) =>
          a.quantity > b.quantity ? 1 : b.quantity > a.quantity ? -1 : 0
        );
        break
      }
      case "3": {
        data = data.sort((a, b) =>
          a.shipping > b.shipping ? 1 : b.shipping > a.shipping ? -1 : 0
        );
        break
      }
    }

    let svg = appendSvg({ id: `h_bar_chart_${id}`, width, height, margin });

    let yScale = d3
      .scaleBand()
      .range([height, 0])
      .domain(
        data.map((d) => {
          return d.product;
        })
      )
      .padding(0.25);

    svg
      .append("g")
      .call(d3.axisLeft(yScale).tickSize(0).tickPadding(7))
      .call((g) => g.select(".domain").remove());

    let xScale = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(data, (d) =>
          id == 1 ? d.sales : id == 2 ? d.quantity : d.shipping
        ),
      ])
      .range([0, width]);

    svg
      .append("g")
      .call(d3.axisBottom(xScale).ticks(5).tickSize(0).tickPadding(7))
      .attr("transform", `translate(0, ${height})`)
      .call((g) => g.select(".domain").remove());

    svg
      .selectAll("bars")
      .data(data)
      .enter()
      .append("rect")
      .attr("y", (d) => yScale(d.product))
      .attr("x", 0)
      .attr("height", yScale.bandwidth())
      .attr("width", (d) =>
        xScale(id == 1 ? d.sales : id == 2 ? d.quantity : d.shipping)
      )
      .attr("fill", id == 1 ? "#f2b97c" : id == 2 ? "#74a1c8" : "#69aaa5");

    // svg
    //   .append("g")
    //   .call(d3.axisRight(yScale).tickSize(0).tickPadding(7))
    //   .call((g) => g.select(".domain").remove());

    // svg
    //   .append("g")
    //   .selectAll("text")
    //   .data(data)
    //   .enter()
    //   .append("text")
    //   .attr("x", 40)
    //   .attr("y", (d) => 90)
    //   .attr("text", (d) =>
    //     id == 1 ? d.sales : id == 2 ? d.quantity : d.shipping
    //   )
    //   .style("font-size", 12)
    //   .attr("text-anchor", "middle");
  };

  return <div id={"h_bar_chart_" + id} className="chart"></div>;
};

export default HorizontalBarChart;
