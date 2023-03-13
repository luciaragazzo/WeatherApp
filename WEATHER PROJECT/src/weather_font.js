let currentTime = new Date();
console.log(currentTime);
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let currentYear = new Date().getFullYear();
  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];
  let currentDate = date.getDate();
  let formattedDate = `${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}`;

  return formattedDate;
}
console.log(formatDate(currentTime));
let now = document.querySelector("#today");
now.innerHTML = formatDate(currentTime);

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let citySearch = document.querySelector("#city-search");
  cityElement.innerHTML = citySearch.value;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function Farenheit(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = 66;
  let fahrenheitLink = document.querySelector("#farenheit");
  fahrenheitLink.addEventListener("click", Farenheit);
}

function Celsius(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = 19;
  let celsiusLink = document.querySelector("#celsius");
  celsiusLink.addEventListener("click", Celsius);
}

let apiKey = "c119ffef35b7245a5e03b6e5724ae961";

function displayWeather(response) {
  console.log(response.data.main.temp);
  let h1 = document.querySelector("h1");
  let temperature = Math.round(response.data.main.temp);
  let description = response.data.weather[0].description;

  h1.innerHTML = `It is ${temperature} degrees, ${description}, in ${response.data.name}`;
}

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(url).then(search.displayWeather);
