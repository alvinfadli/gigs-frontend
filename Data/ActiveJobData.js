// Sample data generation function
function generateSampleData() {
  const activeJobsData = [
    {
      jobName: "Software Developer",
      applicationDeadline: "2023-10-15", // Deadline date in YYYY-MM-DD format
    },
    {
      jobName: "Data Analyst",
      applicationDeadline: "2023-11-05",
    },
    {
      jobName: "Project Manager",
      applicationDeadline: "2023-10-30",
    },
    // Add more jobs with their deadlines as needed
  ];

  return activeJobsData;
}

// Generate sample data for active jobs
const sampleData = generateSampleData();

export const ActiveJobData = sampleData;
