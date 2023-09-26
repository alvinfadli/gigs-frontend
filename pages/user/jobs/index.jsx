import Footer from "@/components/Footer";
import UserNavbar from "@/components/UserNavbar";
import { useState, useEffect } from "react";

function Jobs() {
  const [jobs, setJobs] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState([]);

  useEffect(() => {
    // async function getData() {
    //   const request = await fetch("http://localhost:3000/api/jobs");

    //   const response = await request.json();
    //   setJobs(response.listings);
    //   setLoading(false);
    // }
    // async function getData() {
    //   try {
    //     const accessToken = localStorage.getItem("accessToken");
    //     const response = await fetch("http://localhost:3000/api/jobs", {
    //       headers: {
    //         Authorization: `Bearer ${accessToken}`,
    //       },
    //     });

    //     if (!response.ok) {
    //       throw new Error("Request failed with status: " + response.status);
    //     }

    //     const data = await response.json();
    //     setJobs(data);
    //     setSelectedJob(data[0]);
    //     console.log(selectedJob);
    //     setLoading(false);
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // }
    async function getData() {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await fetch("http://localhost:3000/api/jobs", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error("Request failed with status: " + response.status);
        }

        const data = await response.json();
        const jobs = data.data;
        setJobs(jobs);
        setSelectedJob([jobs[0]]);
        console.log(selectedJob); // Set selectedJob as an array with the first item
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getData();
  }, []);

  function handleJobSelection(item) {
    setSelectedJob([item]);
  }

  useEffect(() => {
    // This useEffect will run whenever selectedJob changes.
    console.log(selectedJob);
  }, [selectedJob]);

  function formatDate(data) {
    const dateString = data;

    const date = new Date(dateString);

    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);

    return formattedDate;
  }

  // function formatCurrency(data) {
  //   const salary = data; // Replace with your data

  //   const formattedCurrency = salary.toLocaleString("id-ID", {
  //     style: "currency",
  //     currency: "IDR",
  //     maximumFractionDigits: 0,
  //   });

  //   return formattedCurrency;
  // }

  function createExcerpt(description, maxLength) {
    if (description.length <= maxLength) {
      return description; // No need to truncate if the description is shorter
    } else {
      const truncatedDescription = description.substring(0, maxLength).trim();
      return truncatedDescription + "..."; // Add ellipsis to indicate truncation
    }
  }

  return (
    <>
      <UserNavbar />
      <div className="pt-20">
        <div className="container w-10/12 mx-auto my-3">
          <div className="flex">
            <div className="w-full md:w-5/12 md:mr-5 ml-1 ">
              <div className="mb-1">
                <form>
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-4 pl-10 text-sm text-gray-900 border border-slate-400 rounded-lg focus:ring-green-500 focus:border-green-500 dark:placeholder-gray-400 dark:focus:ring-green-500 dark:focus:border-green-500"
                      placeholder="Search Jobs..."
                      required
                    />
                    <button
                      type="submit"
                      className="text-white absolute right-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
              <div>
                {loading ? (
                  <i>loading ...</i>
                ) : (
                  <>
                    {jobs.map((item) => {
                      return (
                        <div className="" data-aos="fade-up" key={item.id}>
                          <button
                            className="text-left w-full"
                            onClick={function () {
                              handleJobSelection(item);
                            }}
                          >
                            <div className="relative rounded my-1 rounded-lg pb-10 h-max shadow-lg border-[0.01px] border-slate-400">
                              <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">
                                  {item.title}
                                </div>
                                <p className="text-gray-700 text-base mb-2">
                                  {item.company_name}
                                </p>
                                <p className="text-gray-700 text-base w-max mb-3 bg-slate-200 rounded-lg px-1">
                                  {item.salary}
                                </p>
                                <p className="text-gray-700 text-base font-light">
                                  {createExcerpt(item.description, 100)}
                                </p>
                              </div>
                              <div className="px-6 pt-4 pb-2 absolute bottom-0">
                                <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                  {formatDate(item.postedDate)}
                                </span>
                              </div>
                            </div>
                          </button>
                        </div>
                      );
                    })}
                  </>
                )}
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="md:w-7/12 ">
              <div className=" container h-full hidden md:block">
                <div className="rounded rounded-lg mb-1.5 shadow-lg border-[0.01px] border-slate-400 sticky top-2 h-[95vh]">
                  {loading ? (
                    <i>loading ...</i>
                  ) : (
                    <>
                      {selectedJob.map((item) => {
                        return (
                          <>
                            <div className="relative pt-4 pb-0 h-full">
                              <div className="px-6">
                                <div className="font-bold text-xl">
                                  {item.title}
                                </div>
                              </div>

                              <p className="text-gray-700 text-base mb-2 px-6">
                                {item.company_name}
                              </p>
                              <div className="px-6">
                                <p className="text-gray-700 text-base w-max mb-3 bg-slate-200 rounded-lg px-1">
                                  {item.salary}
                                </p>
                              </div>
                              <div className="container mx-auto w-[100] border-b-[1px] border-slate-400"></div>
                              <div className="overflow-y-auto h-3/4 px-6 pt-3 pb-0">
                                <div>
                                  <ul className="list-disc px-5">
                                    {item.userApplied.map((x, index) => {
                                      return <li key={index}>{x}</li>;
                                    })}
                                  </ul>
                                </div>
                              </div>
                              <div className="container mx-auto w-[100] border-b-[1px] border-slate-400"></div>
                              <div className="absolute bottom-5 right-8">
                                <button className="bg-green-600 hover:bg-green-700 w-24 text-white font-bold py-2 px-4 rounded-lg">
                                  Apply
                                </button>
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Jobs;
