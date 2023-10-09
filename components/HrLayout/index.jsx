// components/Layout.js
import React from "react";
import HrSidebar from "../HrSidebar";

const HrLayout = ({ children }) => {
  return (
    <div className="flex">
      <HrSidebar />
      <main className="flex-grow p-4 bg-slate-100">
        <div className="w-full">{children}</div>
      </main>
    </div>
  );
};

export default HrLayout;
