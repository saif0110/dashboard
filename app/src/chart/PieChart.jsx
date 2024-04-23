import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7], // CSS-style declaration
];

export const options = {
  title: "My Daily Activities",
  pieHole: 0.4,
  is3D: false,
  colors: ["#00acc1", "#6c2eb9", "#4caf50"]
};

export default function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="350px"
      data={data}
      options={options}
    />
  );
}
