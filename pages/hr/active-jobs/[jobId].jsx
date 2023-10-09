import React, { useState, useEffect } from "react";
import { hrAuthPage } from "@/middlewares/hrAuth";
import Cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";
import HrLayout from "@/components/HrLayout";
import { XCircle, CheckCircle2 } from "lucide-react";

function JobDetails() {
  const [isLoading, setIsLoading] = useState(true);
  const [userApplied, setUserApplied] = useState([]);
  const router = useRouter();
  const { jobId } = router.query;

  const jobData = {
    id: jobId,
    title: "Sample Job Title",
    description: "This is a sample job description.",
    // Add more job details here
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get("token");

      try {
        const response = await axios.get(
          `http://localhost:3000/api/dashboard/activejobs/user-applied?id=${jobId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setUserApplied(response.data.data.usersApplied);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching jobs data:", error);
      }
    };

    if (jobId) {
      fetchData();
    }
  }, [jobId]);

  // Handle the case where jobId is not available yet
  if (!jobId) {
    return <div>Error 404: Data not found!</div>;
  }

  return (
    <HrLayout>
      <div className="px-4 md:px-5 py-3 md:py-5">
        <div className="flex items-center justify-between">
          <p
            tabIndex="0"
            className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800"
          >
            Users Applied
          </p>
          <div className="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
            <p className="pr-2">Sort By :</p>
          </div>
        </div>
      </div>
      <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10 rounded-lg shadow-md">
        <div className="overflow-x-auto pb-3">
          <table className="w-full whitespace-nowrap">
            <tbody>
              {isLoading ? (
                <tr>
                  <td>Loading...</td>
                </tr>
              ) : (
                userApplied.map((user) => (
                  <React.Fragment key={user._id}>
                    <tr className="h-3"></tr>
                    <tr
                      tabIndex="0"
                      className="focus:outline-none h-16 border border-gray-100 rounded"
                    >
                      <td className="">
                        <div className="flex items-center pl-5">
                          <p className="text-base font-medium leading-none text-gray-700 mr-2">
                            {user.name}
                          </p>
                        </div>
                      </td>
                      <td className="">
                        <div className="flex items-center pl-5">
                          <p className="text-base font-medium leading-none text-gray-700 mr-2">
                            {user.email}
                          </p>
                        </div>
                      </td>
                      <td className="">
                        <div className="flex items-center pl-5">
                          <p className="text-base font-medium leading-none text-gray-700 mr-2">
                            {user.contactNumber}
                          </p>
                        </div>
                      </td>
                      <td className="">
                        <div className="flex items-center pl-5">
                          <p className="text-base font-medium leading-none text-gray-700 mr-2">
                            {user.address}
                          </p>
                        </div>
                      </td>
                      <td className="pr-3 w-fit">
                        <div className="flex justify-end">
                          <button
                            className="mr-5 focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"
                            onClick={() => handleDetails(job._id)}
                          >
                            View Profile
                          </button>
                          <button
                            className="mr-5 focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"
                            onClick={() => handleDetails(job._id)}
                          >
                            Mail
                          </button>
                          <div className="flex gap-3 justify-end">
                            <button
                              className="text-sm leading-none text-gray-600 py-3 px-3 bg-green-200 rounded hover:bg-green-300 focus:outline-none"
                              onClick={() => handleDetails(job._id)}
                            >
                              <CheckCircle2 color="#166534" />
                            </button>
                            <button
                              className="text-sm leading-none text-gray-600 py-3 px-3 bg-red-200 rounded hover:bg-red-300 focus:outline-none"
                              onClick={() => handleDetails(job._id)}
                            >
                              <XCircle color="#991b1b" />
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </React.Fragment>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="py-3"></div>
      <div className=" md:mx-5 mt-20 px-2 md:mt-5 w-full">
        <div>
          <h2>Job Details</h2>
          <p>Job ID: {jobData.id}</p>
          <h3>{jobData.title}</h3>
          <p>{jobData.description}</p>
        </div>
      </div>
    </HrLayout>
  );
}

export default JobDetails;
