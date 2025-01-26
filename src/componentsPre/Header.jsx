import React from "react";

const Header = () => {
  return (
    <div className=" bg-gray-600 drop-shadow-lg rounded-xl flex justify-between items-center">
      <h1 className="p-5 text-2xl text-white">KAVACH Dashboard</h1>
      <button className="bg-[#dce6f2] text-[#182d4c] hover:bg-red-500 hover:text-white px-4 py-2 mr-4 rounded-full text-1xl">
        Log Out
      </button>
    </div>
  );
};

export default Header;
