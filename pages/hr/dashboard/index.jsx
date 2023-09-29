import Sidebar, { SidebarItem } from "@/components/HrSidebar";
import UserNavbar from "@/components/UserNavbar";
import { LayoutDashboard, Briefcase, HelpCircle } from "lucide-react";

export default function HrDashboard() {
  return (
    <>
      <div className="flex">
        <Sidebar>
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" />
          <SidebarItem icon={<Briefcase size={20} />} text="Jobs" />
          <hr className="my-3" />
          <SidebarItem icon={<HelpCircle size={20} />} text="Help" />
        </Sidebar>
        <div className="mx-5 mt-20 md:mt-8 w-full">
          <div className="container">
            <div class="w-full px-4 flex flex-wrap justify-center text-center mx-auto">
              <div class="mb-2 p-2 w-full sm:w-1/2 lg:w-1/4 ">
                <div
                  class="block rounded-lg bg-white  dark:bg-slate-100 shadow-md"
                  data-aos="fade-up"
                >
                  <div class="p-6">
                    <p class="mb-4 text-neutral-600 text-7xl">213</p>
                    <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800">
                      All Jobs
                    </h5>
                  </div>
                </div>
              </div>
              <div class="mb-2 p-2 w-full sm:w-1/2 lg:w-1/4">
                <div
                  class="block rounded-lg bg-white  dark:bg-slate-100 shadow-md"
                  data-aos="fade-up"
                >
                  <div class="p-6">
                    <p class="mb-4 text-neutral-600 text-7xl">20</p>
                    <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800">
                      Active Jobs
                    </h5>
                  </div>
                </div>
              </div>
              <div class="mb-2 p-2 w-full sm:w-1/2 lg:w-1/4">
                <div
                  class="block rounded-lg bg-white  dark:bg-slate-100 shadow-md"
                  data-aos="fade-up"
                >
                  <div class="p-6">
                    <p class="mb-4 text-neutral-600 text-7xl">20</p>
                    <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800">
                      Total Applicants
                    </h5>
                  </div>
                </div>
              </div>
              <div class="mb-2 p-2 w-full sm:w-1/2 lg:w-1/4">
                <div
                  class="block rounded-lg bg-white  dark:bg-slate-100 shadow-md"
                  data-aos="fade-up"
                >
                  <div class="p-6">
                    <p class="mb-4 text-neutral-600 text-7xl">20</p>
                    <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800">
                      Waiting Applicants
                    </h5>
                  </div>
                </div>
              </div>

              <div class="mb-2 p-2 w-full">
                <div
                  class="block rounded-lg bg-white  dark:bg-slate-100 shadow-md"
                  data-aos="fade-up"
                >
                  <div class="p-6">
                    <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800">
                      Line Graph
                    </h5>
                    <p class="mb-4 text-neutral-600"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
