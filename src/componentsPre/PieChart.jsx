import React, { useState } from "react";
import Chart from "react-apexcharts";

const PieChart = () => {
  const [options] = useState({
    labels: ["Apple", "Mango", "Orange", "Banana", "Grapes"],
  });

  const [series] = useState([44, 55, 41, 17, 15]);

  return (
    <Chart
      options={options}
      series={series}
      type="pie"
      width="260"
      className="mt-4 shadow-2xl text-wz bg-gray-400 rounded"
    />
  );
};

export default PieChart;
