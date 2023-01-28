let btn = document.getElementById("btn");
btn.addEventListener("click", getWeather);
let inputBox = document.getElementById("input");
inputBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    getWeather();
  }
});

let city = document.getElementById("city");
let feels_like = document.getElementById("des");
let temperature = document.getElementById("temp");
let logo = document.getElementById("logo");
let Humidity = document.getElementById("humidity");
let Pressure = document.getElementById("pressure");
let min_temp = document.getElementById("min_temp");
let max_temp = document.getElementById("max_temp");

function getWeather() {
  let API_key = "d7ed544cb380e99eec9211c10aea6efc";
  let cityName = document.getElementById("input").value;
  try {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_key}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const { name } = data;
        const { temp,temp_min,temp_max,pressure,humidity } = data.main;
        const { icon } = data.weather[0];
        const des = data.weather[0].main;
        Pressure.innerText="Pressure:"+pressure+"hPa";
        Humidity.innerText="Humidity:"+humidity+"%";
        min_temp.innerText="Min Temp:"+temp_min+"°C";
        max_temp.innerText="Max Temp:"+temp_max+"°C";
        city.innerText = name;
        feels_like.textContent = des;
        temperature.innerText = temp + "°C";
        logo.src = `https://openweathermap.org/img/wn/${icon}@4x.png`;
      });
  } catch {
    alert("Country Not Found :(");
  }
}
// getWeather()


