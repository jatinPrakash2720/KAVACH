import React from "react";
import Header from "../componentsPre/Header";
import LineChart from "../componentsPre/LineChart";
import BarChart from "../componentsPre/BarChart";
import PieChart from "../componentsPre/PieChart";
import BarChartComp from "../components/BarChartComp";
import Dashboard from "../DataGen/Dashboard";

const MainSoldierDashboard = () => {
  return (
    <div className="p-3">
      <Header />
      <div className="mt-5 rounded">
        <div>
          {/* <Dashboard /> */}
          <BarChartComp />
        </div>
        {/* <span className="gap-4  text-white w-3/5 flex items-start justify-start">
          <LineChart />

          <div className="flex flex-col ">
            <BarChart />
            <span className="flex flex-row">
              <PieChart />
              <PieChart />
            </span>
          </div>
        </span> */}
      </div>
    </div>
  );
};

export default MainSoldierDashboard;
