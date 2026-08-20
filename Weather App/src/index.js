import "./style.css";

const API_KEY = "";

const form = document.querySelector("#weather-form");
const locationInput = document.querySelector("#location-input");

const weatherContainer = document.querySelector("#weather-container");
const loading = document.querySelector("#loading");
const errorContainer = document.querySelector("#error");

//get weather from api
async function getWeather(location) {
    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Location not found");
    }

    const data = await response.json();

    console.log(data);

    return data;
}


//function for api data
function processWeatherData(data) {
    const temperatureC = data.main.temp;
    const feelsLikeC = data.main.feels_like;

    const temperatureF = (temperatureC * 9) / 5 + 32;
    const feelsLikeF = (feelsLikeC * 9) / 5 + 32;

    return {
        location: data.name,
        country: data.sys.country,

        temperatureC: Math.round(temperatureC),
        temperatureF: Math.round(temperatureF),

        condition: data.weather[0].description,

        humidity: data.main.humidity,

        windKph: Math.round(data.wind.speed * 3.6),

        feelsLikeC: Math.round(feelsLikeC),
        feelsLikeF: Math.round(feelsLikeF),

        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    };
}

//display weather
function displayWeather(weather) {
    weatherContainer.innerHTML = `
        <div class="weather-card">

            <h2>
                ${weather.location}, ${weather.country}
            </h2>

            <img
                src="${weather.icon}"
                alt="${weather.condition}"
                class="weather-icon"
            >

            <h3>${weather.condition}</h3>

            <div class="temperature">

                <span id="temperature">
                    ${weather.temperatureC}
                </span>

                <span id="unit">°C</span>

            </div>

            <p>
                Feels like:
                <span id="feels-like">
                    ${weather.feelsLikeC}°C
                </span>
            </p>

            <p>
                Humidity:
                ${weather.humidity}%
            </p>

            <p>
                Wind:
                ${weather.windKph} km/h
            </p>

            <div class="temperature-buttons">

                <button id="celsius-btn">
                    Celsius
                </button>

                <button id="fahrenheit-btn">
                    Fahrenheit
                </button>

            </div>

        </div>
    `;

    //temperature toggle
    const celsiusButton = document.querySelector("#celsius-btn");
    const fahrenheitButton = document.querySelector("#fahrenheit-btn");

    const temperature = document.querySelector("#temperature");
    const unit = document.querySelector("#unit");

    const feelsLike = document.querySelector("#feels-like");


    celsiusButton.addEventListener("click", () => {

        temperature.textContent = weather.temperatureC;
        unit.textContent = "°C";

        feelsLike.textContent =
            `${weather.feelsLikeC}°C`;
    });


    fahrenheitButton.addEventListener("click", () => {

        temperature.textContent = weather.temperatureF;
        unit.textContent = "°F";

        feelsLike.textContent =
            `${weather.feelsLikeF}°F`;
    });
}


// function show loading
function showLoading() {
    loading.textContent = "Loading...";
}

function hideLoading() {
    loading.textContent = "";
}

// error function
function showError(message) {
    errorContainer.textContent = message;
}

function clearError() {
    errorContainer.textContent = "";
}

//form submission
form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const location = locationInput.value.trim();

    if (location === "") {
        return;
    }

    clearError();
    showLoading();

    weatherContainer.innerHTML = "";

    try {
        const data = await getWeather(location);

        const weather = processWeatherData(data);

        console.log("Processed Weather:", weather);

        displayWeather(weather);
    } catch (error) {
        console.error(error);

        showError("Could not find weather for that location.");
    } finally {
        hideLoading();
    }
});
