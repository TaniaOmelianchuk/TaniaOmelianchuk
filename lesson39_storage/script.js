async function getWeather() {
    const apiKey = "d77c60bd98c922206cc52bb4f9014880";
    const city = "Kyiv";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    return {
      temperature: Math.round(data.main.temp - 273.15),
      windSpeed: data.wind.speed,
      humidity: data.main.humidity,
      weatherDescription: data.weather[0].description,
    };
  }

  function showWeather(weather) {
    document.getElementById("temperature").textContent = `${weather.temperature}°C`;
    document.getElementById("wind-speed").textContent = `${weather.windSpeed} м/с`;
    document.getElementById("humidity").textContent = `${weather.humidity}%`;
    document.getElementById("weather-description").textContent = weather.weatherDescription;
  }

  const lastWeatherUpdate = localStorage.getItem("lastWeatherUpdate");
  if (lastWeatherUpdate && (Date.now() - lastWeatherUpdate < 2 * 60 * 60 * 1000)) {
    const weather = JSON.parse(localStorage.getItem("weather"));
    showWeather(weather);
  } else {
    getWeather().then(weather => {
      localStorage.setItem("weather", JSON.stringify(weather));
      localStorage.setItem("lastWeatherUpdate", Date.now());
      showWeather(weather);
    });
  }
  
  getWeather();