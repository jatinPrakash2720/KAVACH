import React, { useState } from "react";
import Chart from "react-apexcharts";

const LineChart = () => {
  // Chart options
  const [options] = useState({
    chart: {
      id: "basic-line-chart",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996],
    },
  });

  // Data for the chart
  const [series] = useState([
    {
      name: "Sales",
      data: [30, 40, 35, 50, 49, 60],
    },
  ]);

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="line"
        height="500"
        width="980"
        className="mt-4 shadow-2xl text-wz bg-gray-400 rounded"
      />
    </div>
  );
};

export default LineChart;
