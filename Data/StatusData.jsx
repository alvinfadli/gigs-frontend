// Sample data generation function
function generateSampleData() {
  const statusData = [
    { status: "Pending", count: Math.floor(Math.random() * 100) },
    { status: "Accepted", count: Math.floor(Math.random() * 100) },
    { status: "Rejected", count: Math.floor(Math.random() * 100) },
    // Add more status categories as needed
  ];

  return statusData;
}

// Generate sample data for application statuses
const sampleData = generateSampleData();

export const StatusData = sampleData;
