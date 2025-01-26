import React, { useState } from "react";
import DataGenerator from "./DataGenerator";
import ActualBarChart from "./ActualBarChart";
import TeamEfficiencyGraph from "./TeamEfficiencyGraph";

const BarChartComp = () => {
  const [realTimeData, setRealTimeData] = useState([]);
  const handleDataGenerate = (data) => {
    setRealTimeData(data);
  };
  return (
    <div>
      <DataGenerator onDataGenerate={handleDataGenerate} />
      <ActualBarChart jsonData={realTimeData} />
      <TeamEfficiencyGraph jsonData={realTimeData} />
    </div>
  );
};

export default BarChartComp;
