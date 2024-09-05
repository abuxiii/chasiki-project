const countries = {
    US: [
        { name: 'New York', timeZone: 'America/New_York' },
        { name: 'Los Angeles', timeZone: 'America/Los_Angeles' }
    ],
    UK: [
        { name: 'London', timeZone: 'Europe/London' }
    ],
    JP: [
        { name: 'Tokyo', timeZone: 'Asia/Tokyo' }
    ],
    AU: [
        { name: 'Sydney', timeZone: 'Australia/Sydney' },
        { name: 'Melbourne', timeZone: 'Australia/Melbourne' }
    ],
    RU: [
        { name: 'Moscow', timeZone: 'Europe/Moscow' }
    ],
    UZ: [
        {name: 'Tashkent' , timeZone: 'Asia/Tashkent'}
    ]

};

function createClock(city) {
    const clockDiv = document.createElement('div');
    clockDiv.className = 'clock';

    const cityName = document.createElement('div');
    cityName.className = 'city-name';
    cityName.innerText = city.name;

    const timeDiv = document.createElement('div');
    timeDiv.className = 'time';
    timeDiv.innerText = getTime(city.timeZone);

    clockDiv.appendChild(cityName);
    clockDiv.appendChild(timeDiv);

    return clockDiv;
}

// Function to get the current time in the specified timezone
function getTime(timeZone) {
    const date = new Date();
    return date.toLocaleTimeString('en-US', { timeZone });
}

// Function to update clocks for selected country
function updateCountry() {
    const selectedCountry = document.getElementById('countrySelect').value;
    const clockContainer = document.getElementById('clockContainer');
    clockContainer.innerHTML = ''; // Clear existing clocks

    if (selectedCountry && countries[selectedCountry]) {
        countries[selectedCountry].forEach(city => {
            const clock = createClock(city);
            clockContainer.appendChild(clock);
        });
    }
}

// Function to update clocks every second
function updateClocks() {
    const selectedCountry = document.getElementById('countrySelect').value;
    if (selectedCountry) {
        updateCountry(); // Update clocks if a country is selected
    }
}

setInterval(updateClocks, 1000); // Update clocks every second




