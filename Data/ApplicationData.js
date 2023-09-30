// Sample data generation function
function generateSampleData(startDate, endDate) {
  const data = [];
  let currentDate = new Date(startDate);

  // Loop through each month within the time period
  while (currentDate <= endDate) {
    // Generate a random number of applications for the first date of the current month
    const firstDateOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const count = Math.floor(Math.random() * 10); // Adjust the range as needed
    const monthName = firstDateOfMonth.toLocaleString("default", {
      month: "long",
    });

    data.push({
      month: monthName,
      count,
    });

    // Move to the first date of the next month
    currentDate.setMonth(currentDate.getMonth() + 1);
  }

  return data;
}

// Define the start and end dates for your time period
const startDate = new Date("2023-01-01");
const endDate = new Date("2023-09-30");

// Generate sample data for applications over time (first date of each month)
const sampleData = generateSampleData(startDate, endDate);

export const ApplicationData = sampleData;
