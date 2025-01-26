import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const ActualBarChart = ({ jsonData }) => {
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
      colors: [], // Dynamically updated colors will be set here
      plotOptions: {
        bar: {
          distributed: true, // This ensures each bar gets its own color
        },
      },
    },
  });

  // Update chart data whenever new JSON data is received
  useEffect(() => {
    if (Array.isArray(jsonData) && jsonData.length > 0) {
      const efficiencies = jsonData.map((item) => item.efficiency || 0);

      // Generate bar colors based on efficiency ranges
      const barColors = efficiencies.map((efficiency) => {
        if (efficiency < 25) return "red"; // Below 25
        if (efficiency >= 25 && efficiency <= 45) return "yellow"; // Between 25 and 45
        return "blue"; // Above 45
      });

      setChartData((prevState) => ({
        ...prevState,
        series: [
          {
            ...prevState.series[0],
            data: efficiencies,
          },
        ],
        options: {
          ...prevState.options,
          colors: barColors, // Set the bar colors
        },
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

export default ActualBarChart;
