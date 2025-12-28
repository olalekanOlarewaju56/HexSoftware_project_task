async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "YOUR_API_KEY";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  document.getElementById("result").innerHTML =
    `Temperature: ${data.main.temp}°C <br> Condition: ${data.weather[0].main}`;
}
