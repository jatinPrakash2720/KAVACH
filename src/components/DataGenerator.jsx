import React, { useEffect, useState } from "react";

const DataGenerator = ({ onDataGenerate }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      const generatedData = generateRandomData();
      setData(generatedData);
      onDataGenerate(generatedData);
    }, 3000);

    return () => clearInterval(interval);
  }, [onDataGenerate]);
  const generateRandomData = () => {
    return Array.from({ length: 10 }, (_, i) => ({
      timeStamp: new Date().toISOString(),
      soldier: `Soldier ${i + 1}`,
      efficiency: Math.floor(Math.random() * 101),
    }));
  };
  return <div></div>;
};

export default DataGenerator;
