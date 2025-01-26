import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const TeamEfficiencyGraph = ({ jsonData }) => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Team Efficiency",
        data: [],
      },
    ],
    options: {
      chart: {
        type: "area",
        animations: {
          enabled: true,
          easing: "linear",
          dynamicAnimation: {
            speed: 1000,
          },
        },
      },
      xaxis: {
        categories: [], // Timestamps will be added dynamically
        title: {
          text: "Time",
        },
      },
      yaxis: {
        max: 100,
        title: {
          text: "Efficiency (%)",
        },
      },
      title: {
        text: "Real-Time Team Efficiency",
        align: "center",
      },
      stroke: {
        curve: "smooth",
      },
    },
  });

  // Calculate average efficiency and update the graph
  useEffect(() => {
    if (Array.isArray(jsonData) && jsonData.length > 0) {
      const averageEfficiency =
        jsonData.reduce((sum, item) => sum + (item.efficiency || 0), 0) /
        jsonData.length;

      const timestamp = new Date().toLocaleTimeString();

      setChartData((prevState) => ({
        ...prevState,
        series: [
          {
            ...prevState.series[0],
            data: [...prevState.series[0].data, averageEfficiency].slice(-10), // Keep last 10 points
          },
        ],
        options: {
          ...prevState.options,
          xaxis: {
            ...prevState.options.xaxis,
            categories: [
              ...prevState.options.xaxis.categories,
              timestamp,
            ].slice(-10), // Keep last 10 timestamps
          },
        },
      }));
    }
  }, [jsonData]);

  return (
    <div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default TeamEfficiencyGraph;
