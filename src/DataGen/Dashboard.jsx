import React, { useState } from "react";
import RealTimeBarChart from "./RealTimeBarChart"; // Your bar graph component
import JSONDataGenerator from "./JSONDataGenerator"; // JSON generator component

const Dashboard = () => {
  const [realTimeData, setRealTimeData] = useState([]);

  // Handle data generation from JSONDataGenerator
  const handleDataGenerate = (data) => {
    setRealTimeData(data);
  };

  return (
    <div>
      <h1>Soldier Efficiency Dashboard</h1>

      {/* JSON Data Generator */}
      <JSONDataGenerator onDataGenerate={handleDataGenerate} />

      {/* Bar Chart Component */}
      <RealTimeBarChart jsonData={realTimeData} />
    </div>
  );
};

export default Dashboard;
