import React, { useState, useEffect } from "react";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, message, Space, Tooltip } from "antd";
import axios from "axios";
import Cookies from "js-cookie";

const handleButtonClick = (e) => {
  message.info("Click on left button.");
  console.log("click left button", e);
};
const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};
const items = [
  {
    label: "Latest",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "Oldest",
    key: "2",
    icon: <UserOutlined />,
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};
function convertTextToTitleCase(text) {
  const words = text.toLowerCase().split("_");

  const titleCaseWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  // Join the words back together with spaces
  return titleCaseWords.join(" ");
}
function formatDate(inputDate) {
  // Define an array of month names
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Parse the input date string
  const date = new Date(inputDate);

  // Get the components of the date
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  // Create a formatted string
  const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;

  return formattedDate;
}

export default function ActiveJobs() {
  const [activeJobs, setActiveJobs] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get("token");

    const axiosInstance = axios.create({
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    axiosInstance
      .get("http://localhost:3000/api/dashboard/activejobs")
      .then((response) => {
        setActiveJobs(response.data.data.activeJobs);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs data:", error);
      });
  }, []);
  return (
    <>
      <div className="sm:px-6 w-full">
        <div className="px-4 md:px-10 py-4 md:py-7">
          <div className="flex items-center justify-between">
            <p
              tabIndex="0"
              className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800"
            >
              Active Jobs
            </p>
            <div className="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
              <p className="pr-2">Sort By :</p>
              {/* <select
                aria-label="select"
                className="focus:text-orange-600 focus:outline-none bg-transparent ml-1"
              >
                <option className="text-sm text-orange-800">Latest</option>
                <option className="text-sm text-orange-800">Oldest</option>
                <option className="text-sm text-orange-800">Latest</option>
              </select> */}
              <Space wrap>
                <Dropdown menu={menuProps}>
                  <Button>
                    <Space>
                      Latest
                      <DownOutlined />
                    </Space>
                  </Button>
                </Dropdown>
              </Space>
            </div>
          </div>
        </div>
        <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10 rounded-lg shadow-md">
          <div className="sm:flex items-center justify-between">
            <div className="flex items-center">
              <a
                className="rounded-full focus:outline-none focus:ring-2  focus:bg-orange-50 focus:ring-orange-800"
                href=" #"
              >
                <div className="py-2 px-8 bg-orange-100 text-orange-700 rounded-full">
                  <p>All</p>
                </div>
              </a>
              <a
                className="rounded-full focus:outline-none focus:ring-2 focus:bg-orange-50 focus:ring-orange-800 ml-4 sm:ml-8"
                href="#"
              >
                <div className="py-2 px-8 text-gray-600 hover:text-orange-700 hover:bg-orange-100 rounded-full ">
                  <p>Done</p>
                </div>
              </a>
              <a
                className="rounded-full focus:outline-none focus:ring-2 focus:bg-orange-50 focus:ring-orange-800 ml-4 sm:ml-8"
                href="#"
              >
                <div className="py-2 px-8 text-gray-600 hover:text-orange-700 hover:bg-orange-100 rounded-full ">
                  <p>Pending</p>
                </div>
              </a>
            </div>
            <button className="focus:ring-2 focus:ring-offset-2 focus:ring-orange-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-orange-700 hover:bg-orange-600 focus:outline-none rounded">
              <p className="text-sm font-medium leading-none text-white">
                Add Task
              </p>
            </button>
          </div>
          <div className="mt-7 overflow-x-auto pb-3">
            <table className="w-full whitespace-nowrap">
              <tbody>
                {isLoading ? (
                  <tr>
                    <td>Loading...</td>
                  </tr>
                ) : (
                  <>
                    {activeJobs.map((job) => (
                      <React.Fragment key={job._id}>
                        <tr className="h-3"></tr>
                        <tr
                          tabIndex="0"
                          className="focus:outline-none h-16 border border-gray-100 rounded"
                        >
                          <td>
                            <div className="ml-5">
                              <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                <input
                                  placeholder="checkbox"
                                  type="checkbox"
                                  className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full"
                                />
                                <div className="check-icon hidden bg-orange-700 text-white rounded-sm">
                                  <svg
                                    className="icon icon-tabler icon-tabler-check"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path
                                      stroke="none"
                                      d="M0 0h24v24H0z"
                                    ></path>
                                    <path d="M5 12l5 5l10 -10"></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="">
                            <div className="flex items-center pl-5">
                              <p className="text-base font-medium leading-none text-gray-700 mr-2">
                                {job.title}
                              </p>
                            </div>
                          </td>
                          <td className="pl-24"></td>
                          <td className="pl-5"></td>
                          <td className="pl-5">
                            <div className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                              >
                                <path
                                  d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667"
                                  stroke="#52525B"
                                  strokeWidth="1.25"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <circle
                                  cx="7.50004"
                                  cy="7.49967"
                                  r="1.66667"
                                  stroke="#52525B"
                                  strokeWidth="1.25"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></circle>
                              </svg>
                              <p className="text-sm leading-none text-gray-600 ml-2">
                                {convertTextToTitleCase(job.status)}
                              </p>
                            </div>
                          </td>
                          <td className="pl-5">
                            <div className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                              >
                                <path
                                  d="M3.33331 17.4998V6.6665C3.33331 6.00346 3.59671 5.36758 4.06555 4.89874C4.53439 4.4299 5.17027 4.1665 5.83331 4.1665H14.1666C14.8297 4.1665 15.4656 4.4299 15.9344 4.89874C16.4033 5.36758 16.6666 6.00346 16.6666 6.6665V11.6665C16.6666 12.3295 16.4033 12.9654 15.9344 13.4343C15.4656 13.9031 14.8297 14.1665 14.1666 14.1665H6.66665L3.33331 17.4998Z"
                                  stroke="#52525B"
                                  strokeWidth="1.25"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M10 9.1665V9.17484"
                                  stroke="#52525B"
                                  strokeWidth="1.25"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M6.66669 9.1665V9.17484"
                                  stroke="#52525B"
                                  strokeWidth="1.25"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M13.3333 9.1665V9.17484"
                                  stroke="#52525B"
                                  strokeWidth="1.25"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              <p className="text-sm leading-none text-gray-600 ml-2">
                                23
                              </p>
                            </div>
                          </td>
                          <td className="pl-5 px-5">
                            <div className="text-center py-3 w-full px-2 text-sm focus:outline-none leading-none text-orange-700 bg-orange-100 rounded">
                              {formatDate(job.applicationDeadline)}
                            </div>
                          </td>
                          <td className="pl-4">
                            <button className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">
                              View
                            </button>
                          </td>
                          <td>
                            <div className="relative px-5 pt-2">
                              <button
                                className="focus:ring-2 rounded-md focus:outline-none"
                                role="button"
                                aria-label="option"
                              >
                                <svg
                                  className="dropbtn"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                >
                                  <path
                                    d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z"
                                    stroke="#9CA3AF"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z"
                                    stroke="#9CA3AF"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z"
                                    stroke="#9CA3AF"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </button>
                              <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 hidden">
                                <div
                                  tabIndex="0"
                                  className="focus:outline-none focus:text-orange-600 text-xs w-full hover:bg-orange-700 py-4 px-4 cursor-pointer hover:text-white"
                                >
                                  <p>Edit</p>
                                </div>
                                <div
                                  tabIndex="0"
                                  className="focus:outline-none focus:text-orange-600 text-xs w-full hover:bg-orange-700 py-4 px-4 cursor-pointer hover:text-white"
                                >
                                  <p>Delete</p>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </React.Fragment>
                    ))}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="py-3"></div>
      </div>
    </>
  );
}
