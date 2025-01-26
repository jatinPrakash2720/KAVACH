import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const RealTimeBarChart = ({ jsonData }) => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Efficiency",
        data: Array(10).fill(0),
      },
    ],
    options: {
      chart: {
        type: "bar",
        animations: {
          enabled: true,
          easing: "linear",
          dynamicAnimation: {
            speed: 1000,
          },
        },
      },
      xaxis: {
        categories: Array.from({ length: 10 }, (_, i) => `Soldier ${i + 1}`),
      },
      yaxis: {
        max: 100,
      },
      title: {
        text: "Real-Time Soldier Efficiencies",
        align: "center",
      },
    },
  });

  // Update chart data whenever new JSON data is received
  useEffect(() => {
    if (jsonData.length) {
      const efficiencies = jsonData.map((item) => item.efficiency);
      setChartData((prevState) => ({
        ...prevState,
        series: [
          {
            ...prevState.series[0],
            data: efficiencies,
          },
        ],
      }));
    }
  }, [jsonData]);

  return (
    <div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default RealTimeBarChart;
