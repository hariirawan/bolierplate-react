import React, { Fragment } from "react";
import { LineChart, Line, CartesianGrid } from "recharts";
const data = [
  { name: "Page A", uv: 100, pv: 1000, amt: 2000 },
  { name: "Page A", uv: 250, pv: 2400, amt: 2400 },
  { name: "Page A", uv: 150, pv: 2400, amt: 2400 },
  { name: "Page A", uv: 300, pv: 2400, amt: 2400 },
  { name: "Page A", uv: 200, pv: 2400, amt: 2400 },
  { name: "Page A", uv: 220, pv: 2400, amt: 2400 },
  { name: "Page A", uv: 100, pv: 2400, amt: 2400 }
];

export default function ChartView(props) {
  return (
    <Fragment>
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid
          strokeLinejoin="#fffff"
          strokeWidth="2"
          strokeLinecap="#fffff"
        />
      </LineChart>
    </Fragment>
  );
}
