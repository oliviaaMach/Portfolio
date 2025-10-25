//  Automatic update the year
document.getElementById('year').textContent = new Date().getFullYear();


 
//Hamburger menu
const hamburger = document.getElementById("menuToggle")
const menu = document.querySelector(".menu")

hamburger.addEventListener("click", () => {
    menu.classList.toggle("open");
});

//smooth scroll to section
    function scrollToSection(id) {
      const section = document.getElementById(id);
      section.scrollIntoView({ behavior: 'smooth' });
    }



//collapsible menu in CV

document.querySelectorAll('.collapsible-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const panel = btn.nextElementSibling;

    btn.classList.toggle("active");

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});



// Weather widget

let refreshInterval; // Will store the intervalls ID

function fetchWeather(stationID) {
    fetch(`https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/21/station/${stationID}/period/latest-hour/data.json`)
    .then(response => response.json())    // Handle the response abd convert the raw HTTP response into JavaScript object.
    .then(data => {     // To work with the actual JSON data from the API. Data is now a JavaScript object containing the API info
            if (!data.value || data.value.length === 0) {
                console.log ('No weather data avaiable');

                // Display position, time and temperature in HTML
                // Calls a separate function and passes an object containing (position, day, time, temperature)
                displayWeather({ position: 'N/A', day: '-', time: '-', temperature: '-1' }); 
                return;
            }
                const latest = data.value[data.value.length - 1]; // [data.value.length -1] Gives the index the last reading
                const dateObj = new Date(latest.date);

                const day = dateObj.toLocaleDateString('sv-SE'); // e.g. 2025-10-25
                const time = dateObj.toLocaleTimeString('sv-SE', {
                hour: '2-digit',
                minute: '2-digit'
            });
                const temperature = latest.value;
                const position = data.station.name;
                console.log(` Day: ${day}, Time: ${time}, Temperature: ${temperature}°C, Position: ${position}`);
                
                displayWeather({ position, day, time, temperature });

            })   
            .catch(err => console.error('Error fetching weather:', err));
            console.log('fetchWeather');
        };

//Display the weather in HTML

    function displayWeather({position, day, time, temperature}) {
        const card = document.getElementById('weatherCard');

        card.innerHTML = `
            <h5>Temperature in ${position}</h5>
            <p><span class="bold">Day:</span> ${day}</p>
            <p><span class="bold">Time:</span> ${time}</p>
            <p><span class="bold">Temp:</span> ${temperature} °C </p>
        `;
    };
      startAutoRefresh(document.getElementById('citySelect').value);  // Fetch the default city on page load

      document.getElementById('fetchBtn').addEventListener('click', () => {
      const stationID = document.getElementById('citySelect').value;
      startAutoRefresh(stationID);
  });

  // Function to start auto-refresh
function startAutoRefresh(stationID) {
    // Fetch immediately
    fetchWeather(stationID);
    if (refreshInterval) clearInterval(refreshInterval);     // Clear previous interval if it exists
    refreshInterval = setInterval(() => fetchWeather(stationID), 300000);     // Set interval to fetch every 5 minutes (300,000 ms)
}

fetchWeather(document.getElementById('citySelect').value);  // Return to the function fetchWeather