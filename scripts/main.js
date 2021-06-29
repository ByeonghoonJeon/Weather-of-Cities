async function formOnSubmit(event) {
  // get city name from form input value
  console.log(event);
  // get form data
  const formData = new FormData(event.target);
  console.log(formData);
  // convert to object
  const formProps = Object.fromEntries(formData);
  console.log(formProps);
  // access cityName from object
  const cityName = formProps.cityName;
  console.log(cityName);

  // make api call to weather api
  const query = cityName;
  const apiKey = "51fad77e11441b96834a30e61a4d1f50";
  const units = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    apiKey +
    "&units=" +
    units;
  // get the data from weather API
  const weatherRequest = await axios.get(url);
  const weatherData = weatherRequest.data;
  console.log(weatherData);
  const fullTemp = weatherData.main.temp;
  const temp = fullTemp.toFixed(1);
  const weatherDescription = weatherData.weather[0].description;
  console.log(weatherDescription);

  //   set inner html of result-data div to weather data
  const resultDataDiv = document.querySelector("#result-data");
  resultDataDiv.innerHTML = `
<h3>-----</h3><h3>${query}</h3><h3 style="color: #293B5F;"><strong>${weatherDescription}</strong></h3><h3>-----</h3>
<h3>Temperature</h3><h3 style="color: #293B5F;"><strong>${temp} °C</strong></h3><h3>-----</h3>
`;

// remove the collapse class (show the div)
resultDataDiv.classList.remove("collapse")
}
