import * as d3 from "d3";

export const appendSvg = (params) => {
  return d3
    .select("#" + params.id)
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr(
      "viewBox",
      `0 0 ${params.width + params.margin.left + params.margin.right} ${
        params.height + params.margin.top + params.margin.bottom
      }`
    )
    .append("g")
    .attr(
      "transform",
      `translate(${params.margin.left}, ${params.margin.top})`
    );
};

export const scale = (params) => {
  if (params.scale === "linear") {
    return d3.scaleLinear().range(params.range).domain(params.domain);
  } else if (params.scale === "scaleBand") {
    return d3
      .scaleBand()
      .domain(params.domain)
      .range(params.range)
      .padding(params.padding || 0.1);
  }
};
