import React, { useState } from "react";
import Chart from "react-apexcharts";

const BarChart = () => {
  const [options] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [
        "Soldier 1",
        "Soldier 2",
        "Soldier 3",
        "Soldier 4",
        "Soldier 5",
        "Soldier 6",
        "Soldier 7",
        "Soldier 8",
        "Soldier 9",
        "Soldier 10",
      ],
    },
  });

  const [series] = useState([
    {
      name: "Revenue",
      data: [10, 41, 35, 51, 49, 62],
    },
  ]);

  return (
    <Chart
      options={options}
      series={series}
      type="bar"
      height="400"
      width="1500"
      className="shadow-2xl mt-4 text-wz bg-gray-400 rounded"
    />
  );
};

export default BarChart;
