function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

document.getElementById("heart").addEventListener("click", openNav);

async function getUserData() {
  try {
    const response = await fetch('https://ipinfo.io/json?token=YOUR_TOKEN');
    const data = await response.json();

    const country = data.country;
    const dateTime = new Date();

    //document.querySelectorAll('#country').forEach(el => el.textContent = `Country: ${country}`);
    //document.querySelectorAll('#datetime').forEach(el => el.textContent = `Accessed on: ${dateTime.toLocaleString()}`);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

getUserData();
