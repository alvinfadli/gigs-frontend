import HrNavbar from "@/components/HrNavbar";
import Sidebar, { SidebarItem } from "@/components/HrSidebar";
import { hrAuthPage } from "@/middlewares/hrAuth";

import {
  LayoutDashboard,
  HelpCircle,
  MonitorDot,
  ScreenShareOff,
} from "lucide-react";
import Insight from "@/components/Dashboard/Insight";
import ActiveJobs from "@/components/Dashboard/ActiveJobs";

export async function getServerSideProps(context) {
  const { token } = await hrAuthPage(context);
  return {
    props: {},
  };
}

export default function HrDashboard() {
  return (
    <>
      <div className="md:hidden">
        <HrNavbar />
      </div>
      <div className="flex bg-slate-50">
        <Sidebar>
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Insight"
            active
          />
          <SidebarItem icon={<MonitorDot size={20} />} text="Active Jobs" />
          <SidebarItem icon={<ScreenShareOff size={20} />} text="Past Jobs" />
          <hr className="my-3" />
          <SidebarItem icon={<HelpCircle size={20} />} text="Help" />
        </Sidebar>
        <div className=" md:mx-5 mt-20 px-2 md:mt-5 w-full">
          <Insight />
        </div>
      </div>
    </>
  );
}
