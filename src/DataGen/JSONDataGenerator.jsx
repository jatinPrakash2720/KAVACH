import React, { useState, useEffect } from "react";

const JSONDataGenerator = ({ onDataGenerate }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const generatedData = generateRandomData();
      setData(generatedData); // Update local state
      onDataGenerate(generatedData); // Pass data to the parent component
    }, 1000); // Generate data every second

    return () => clearInterval(interval);
  }, [onDataGenerate]);

  // Function to generate random JSON data
  const generateRandomData = () => {
    return Array.from({ length: 10 }, (_, i) => ({
      timestamp: new Date().toISOString(),
      soldier: `Soldier ${i + 1}`,
      efficiency: Math.floor(Math.random() * 101), // Efficiency between 0 and 100
    }));
  };

  return (
    <div>
      <h2>Generated JSON Data</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default JSONDataGenerator;
