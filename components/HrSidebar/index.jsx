import Link from "next/link";
import Sidebar, { SidebarItem } from "@/components/Sidebar";
import {
  LayoutDashboard,
  HelpCircle,
  MonitorDot,
  ScreenShareOff,
} from "lucide-react";

export default function HrSidebar() {
  return (
    <Sidebar>
      <Link href="/hr/dashboard" className="">
        <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" />
      </Link>
      <Link href="/hr/active-jobs">
        <SidebarItem icon={<MonitorDot size={20} />} text="Active Jobs" />
      </Link>
      <Link href="/hr/past-jobs">
        <SidebarItem icon={<ScreenShareOff size={20} />} text="Past Jobs" />
      </Link>
      <hr className="my-3" />
      <Link href="/hr/help">
        <SidebarItem icon={<HelpCircle size={20} />} text="Help" />
      </Link>
    </Sidebar>
  );
}
