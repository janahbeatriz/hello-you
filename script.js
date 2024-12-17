// Function to fetch the user's country and display the date, time, and country
async function getUserData() {
    try {
      // Fetch data from ipinfo.io API to get the user's country
      const response = await fetch('https://ipinfo.io/json?token=YOUR_TOKEN'); // Replace YOUR_TOKEN with your ipinfo.io API token
      const data = await response.json();
      
      const country = data.country;
      const dateTime = new Date();
      
      // Display the country, date, and time
      document.getElementById('country').textContent = `Country: ${country}`;
      document.getElementById('datetime').textContent = `Accessed on: ${dateTime.toLocaleString()}`;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Call the function on page load
  getUserData();
  