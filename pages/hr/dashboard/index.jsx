import { ActiveJobData } from "@/Data/ActiveJobData";
import { ApplicationData } from "@/Data/ApplicationData";
import { StatusData } from "@/Data/StatusData";
import HrNavbar from "@/components/HrNavbar";
import Sidebar, { SidebarItem } from "@/components/HrSidebar";
import LineChart from "@/components/LineChart";
import PieChart from "@/components/PieChart";
import UserNavbar from "@/components/UserNavbar";
import { hrAuthPage } from "@/middlewares/hrAuth";
import axios from "axios";
import { useEffect } from "react";
import Cookies from "js-cookie";

import {
  LayoutDashboard,
  Briefcase,
  HelpCircle,
  Activity,
  Users2,
  PersonStanding,
  MonitorDot,
  ScreenShareOff,
} from "lucide-react";
import { useState } from "react";

export async function getServerSideProps(context) {
  const { token } = await hrAuthPage(context);
  return {
    props: {},
  };
}

export default function HrDashboard() {
  const [totalJobs, setTotalJobs] = useState(0);
  const [totalActiveJobs, setTotalActiveJobs] = useState(0);
  const [totalApplication, setTotalApplications] = useState(0);
  const [totalPendingApp, setTotalPendingApp] = useState(0);
  const [applicationData, setApplicationData] = useState({
    labels: ApplicationData.map((data) => data.month),
    datasets: [
      {
        label: "Application Data",
        data: ApplicationData.map((data) => data.count),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
      },
    ],
  });
  const [statusData, setStatusData] = useState({
    labels: StatusData.map((data) => data.status),
    datasets: [
      {
        label: "Application Data",
        data: StatusData.map((data) => data.count),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
      },
    ],
  });
  useEffect(() => {
    const token = Cookies.get("token");

    const axiosInstance = axios.create({
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    // Make a GET request to your API endpoint using Axios
    axiosInstance
      .get("http://localhost:3000/api/dashboard/alljobs")
      .then((response) => {
        setTotalJobs(response.data.data.totalJobs);
      })
      .catch((error) => {
        console.error("Error fetching total jobs:", error);
      });
    axiosInstance
      .get("http://localhost:3000/api/dashboard/activejobs")
      .then((response) => {
        setTotalActiveJobs(response.data.data.totalActiveJobs);
      })
      .catch((error) => {
        console.error("Error fetching total jobs:", error);
      });
    axiosInstance
      .get("http://localhost:3000/api/dashboard/totalapplications")
      .then((response) => {
        setTotalApplications(response.data.data.totalApplications);
      })
      .catch((error) => {
        console.error("Error fetching total jobs:", error);
      });
    axiosInstance
      .get("http://localhost:3000/api/dashboard/totalapplications/pending")
      .then((response) => {
        setTotalPendingApp(response.data.data.totalPendingApplications);
      })
      .catch((error) => {
        console.error("Error fetching total jobs:", error);
      });
  }, []);

  const activeJobsData = [
    {
      jobName: "Software Developer",
      applicationDeadline: "2023-10-15",
    },
    {
      jobName: "Data Analyst",
      applicationDeadline: "2023-11-05",
    },
    {
      jobName: "Project Manager",
      applicationDeadline: "2023-10-30",
    },
    {
      jobName: "UI/UX Designer",
      applicationDeadline: "2023-11-10",
    },
    {
      jobName: "Marketing Manager",
      applicationDeadline: "2023-11-20",
    },
    {
      jobName: "Accountant",
      applicationDeadline: "2023-11-15",
    },
    {
      jobName: "Sales Representative",
      applicationDeadline: "2023-11-25",
    },
    {
      jobName: "Customer Support Specialist",
      applicationDeadline: "2023-11-18",
    },
    {
      jobName: "Graphic Designer",
      applicationDeadline: "2023-11-08",
    },
    {
      jobName: "Human Resources Manager",
      applicationDeadline: "2023-11-30",
    },
    // You now have 10 sample data entries
  ];

  const pastJobsData = [
    {
      jobName: "Software Developer",
      totalApplicants: 25,
    },
    {
      jobName: "Data Analyst",
      totalApplicants: 18,
    },
    {
      jobName: "Project Manager",
      totalApplicants: 12,
    },
    {
      jobName: "UI/UX Designer",
      totalApplicants: 15,
    },
    {
      jobName: "Marketing Manager",
      totalApplicants: 20,
    },
    {
      jobName: "Accountant",
      totalApplicants: 10,
    },
    {
      jobName: "Sales Representative",
      totalApplicants: 30,
    },
    {
      jobName: "Customer Support Specialist",
      totalApplicants: 22,
    },
    {
      jobName: "Graphic Designer",
      totalApplicants: 14,
    },
    {
      jobName: "Human Resources Manager",
      totalApplicants: 18,
    },
    // You can continue adding more past jobs with their total applicants as needed
  ];

  return (
    <>
      <div className="md:hidden">
        <HrNavbar />
      </div>
      <div className="flex bg-slate-50">
        <Sidebar>
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            active
          />
          <SidebarItem icon={<MonitorDot size={20} />} text="Active Jobs" />
          <SidebarItem icon={<ScreenShareOff size={20} />} text="Past Jobs" />
          <hr className="my-3" />
          <SidebarItem icon={<HelpCircle size={20} />} text="Help" />
        </Sidebar>
        <div className=" md:mx-5 mt-20 px-2 md:mt-5 w-full">
          <div className="container mx-auto">
            <div className="w-full flex flex-wrap justify-center mx-auto">
              <div className="mb-2 p-2 w-full sm:w-1/2 xl:w-1/4  ">
                <div
                  style={{ height: 120 }}
                  className="block rounded-lg bg-white  shadow-md pt-1"
                  data-aos="fade-up"
                >
                  <div className="flex p-6">
                    <div className="flex items-center bg-orange-200 p-5 mr-3 rounded-full">
                      <Briefcase color="#c2410c" size={25} />
                    </div>
                    <div>
                      <p className="pt-1 text-neutral-600 text-3xl">
                        {totalJobs}
                      </p>
                      <h5 className=" text-lg font-medium leading-tight text-neutral-800">
                        All Jobs
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-2 p-2 w-full sm:w-1/2 xl:w-1/4 ">
                <div
                  style={{ height: 120 }}
                  className="block rounded-lg bg-white  shadow-md pt-1"
                  data-aos="fade-up"
                >
                  <div className="flex p-6">
                    <div className="flex items-center bg-rose-200 p-5 mr-3 rounded-full">
                      <Activity color="#9f1239" size={25} />
                    </div>
                    <div>
                      <p className="pt-1 text-neutral-600 text-3xl">
                        {totalActiveJobs}
                      </p>
                      <h5 className=" text-md font-medium leading-tight text-neutral-800">
                        Active Jobs
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-2 p-2 w-full sm:w-1/2 xl:w-1/4">
                <div
                  style={{ height: 120 }}
                  className="block rounded-lg bg-white  shadow-md pt-1"
                  data-aos="fade-up"
                >
                  <div className="flex p-6">
                    <div className="flex items-center bg-indigo-200 p-5 mr-3 rounded-full">
                      <Users2 color="#3730a3" size={25} />
                    </div>
                    <div>
                      <p className="pt-1 text-neutral-600 text-3xl">
                        {totalApplication}
                      </p>
                      <h5 className=" text-md font-medium leading-tight text-neutral-800">
                        Total Applied
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-2 p-2 w-full sm:w-1/2 xl:w-1/4 ">
                <div
                  style={{ height: 120 }}
                  className="block rounded-lg bg-white  shadow-md pt-1"
                  data-aos="fade-up"
                >
                  <div className="flex p-6">
                    <div className="flex items-center bg-amber-200 p-5 mr-3 rounded-full">
                      <PersonStanding color="#92400e" size={25} />
                    </div>
                    <div>
                      <p className="pt-1 text-neutral-600 text-3xl">
                        {totalPendingApp}
                      </p>
                      <h5 className=" text-md font-medium leading-tight text-neutral-800">
                        Waiting
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="mb-2 p-2 w-full md:w-3/5">
                <div
                  className="block rounded-lg bg-white shadow-md"
                  data-aos="fade-up"
                >
                  <div className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <h5 className="mb-2 text-xl text-center font-medium leading-tight text-neutral-800">
                        Monthly Applicants
                      </h5>
                      <div
                        style={{ height: 350 }}
                        className="flex justify-center items-center"
                      >
                        <LineChart chartData={applicationData} />
                      </div>
                    </div>
                    <p className="mb-1 text-neutral-600"></p>
                  </div>
                </div>
              </div>

              <div className="mb-2 p-2 w-full md:w-2/5">
                <div
                  className="block rounded-lg bg-white shadow-md"
                  data-aos="fade-up"
                >
                  <div className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <h5 className="mb-2 text-xl text-center font-medium leading-tight text-neutral-800">
                        Applicants Status
                      </h5>
                      <div
                        style={{ height: 350 }}
                        className="flex justify-center items-center"
                      >
                        <PieChart chartData={statusData} />
                      </div>
                    </div>
                    <p className="mb-1 text-neutral-600"></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="mb-2 p-2 w-full md:w-1/2">
                <div
                  className="block rounded-lg bg-white shadow-md"
                  data-aos="fade-up"
                >
                  <div className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <h5 className="mb-2 text-xl text-center sm:text-left font-medium leading-tight text-neutral-800">
                        Active Jobs
                      </h5>
                      <div className="flex justify-center items-center">
                        <div className="w-full relative overflow-x-auto">
                          <table className="w-full text-sm md:text-base text-left">
                            <thead>
                              <tr className="border-b border-slate-200">
                                <th
                                  scope="col"
                                  className="p-3 border-r border-slate-200 text-center"
                                >
                                  No
                                </th>
                                <th scope="col" className="text-left p-3">
                                  Position
                                </th>
                                <th
                                  scope="col"
                                  className="border-l border-slate-200 p-3"
                                >
                                  Deadline
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {activeJobsData.map((data, index) => {
                                const jobNumber = index + 1;
                                return (
                                  <tr
                                    className="border-t border-slate-200"
                                    key={index}
                                  >
                                    <td className="p-3 border-r border-slate-200 text-center">
                                      {jobNumber}
                                    </td>
                                    <td className="text-left p-3">
                                      {data.jobName}
                                    </td>
                                    <td className="border-l border-slate-200 p-3">
                                      {data.applicationDeadline}
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <p className="mb-1 text-neutral-600"></p>
                  </div>
                </div>
              </div>

              <div className="mb-2 p-2 w-full md:w-1/2">
                <div
                  className="block rounded-lg bg-white shadow-md"
                  data-aos="fade-up"
                >
                  <div className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <h5 className="mb-2 text-xl text-center sm:text-left font-medium leading-tight text-neutral-800">
                        Past Jobs
                      </h5>
                      <div className="flex justify-center items-center">
                        <div className="w-full relative overflow-x-auto">
                          <table className="w-full text-sm md:text-base text-left">
                            <thead>
                              <tr className="border-b border-slate-200">
                                <th
                                  scope="col"
                                  className="p-3 border-r border-slate-200 text-center"
                                >
                                  No
                                </th>
                                <th scope="col" className="text-left p-3">
                                  Position
                                </th>
                                <th
                                  scope="col"
                                  className="border-l border-slate-200 p-3 text-center"
                                >
                                  Applicants
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {pastJobsData.map((data, index) => {
                                const jobNumber = index + 1;
                                return (
                                  <tr
                                    className="border-t border-slate-200"
                                    key={index}
                                  >
                                    <td className="p-3 border-r border-slate-200 text-center">
                                      {jobNumber}
                                    </td>
                                    <td className="text-left p-3">
                                      {data.jobName}
                                    </td>
                                    <td className="border-l border-slate-200 p-3 text-center">
                                      {data.totalApplicants}
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <p className="mb-1 text-neutral-600"></p>
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
