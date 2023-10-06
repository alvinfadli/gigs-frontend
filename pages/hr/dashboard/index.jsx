import React, { useState } from "react";
import HrNavbar from "@/components/HrNavbar";
import Sidebar, { SidebarItem } from "@/components/HrSidebar";
import { hrAuthPage } from "@/middlewares/hrAuth";
import Insight from "@/components/Dashboard/Insight";
import ActiveJobs from "@/components/Dashboard/ActiveJobs";

import {
  LayoutDashboard,
  HelpCircle,
  MonitorDot,
  ScreenShareOff,
} from "lucide-react";

export async function getServerSideProps(context) {
  const { token } = await hrAuthPage(context);
  return {
    props: {},
  };
}

export default function HrDashboard() {
  const [selectedItem, setSelectedItem] = useState("Insight");

  const handleSidebarItemClick = (text) => {
    setSelectedItem(text);
  };

  const isInsightActive = selectedItem === "Insight";
  const isActiveJobsActive = selectedItem === "Active Jobs";

  return (
    <>
      <div className="md:hidden">
        <HrNavbar />
      </div>
      <div className="flex bg-slate-50">
        <Sidebar>
          <button
            className={`text-left w-min ${
              isInsightActive
                ? "bg-gradient-to-tr from-orange-200 to-orange-100 text-orange-800 rounded-lg"
                : ""
            }`}
            onClick={() => handleSidebarItemClick("Insight")}
          >
            <SidebarItem icon={<LayoutDashboard size={20} />} text="Insight" />
          </button>
          <button
            className={`text-left w-min ${
              isActiveJobsActive
                ? "bg-gradient-to-tr from-orange-200 to-orange-100 text-orange-800 rounded-lg"
                : ""
            }`}
            onClick={() => handleSidebarItemClick("Active Jobs")}
          >
            <SidebarItem icon={<MonitorDot size={20} />} text="Active Jobs" />
          </button>
          <SidebarItem icon={<ScreenShareOff size={20} />} text="Past Jobs" />
          <hr className="my-3" />
          <SidebarItem icon={<HelpCircle size={20} />} text="Help" />
        </Sidebar>
        <div className=" md:mx-5 mt-20 px-2 md:mt-5 w-full">
          {isInsightActive && <Insight />}
          {isActiveJobsActive && <ActiveJobs />}
        </div>
      </div>
    </>
  );
}
