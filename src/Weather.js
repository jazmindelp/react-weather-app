import "./Weather.css";
import axios from "axios";
import { useState } from "react";

import WeatherInfo from "./WeatherInfo";
export default function Weather(props) {
  let [weather, setWeather] = useState({ loading: true });
  let [city, setCity] = useState("");
  function handleResponse(response) {
    console.log(response.data);

    setWeather({
      loading: false,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
    });
  }
  function search() {
    const apiKey = "325bc6t05fe26b896fe3169ea4b9o059";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }
  function handleCitySearch(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  if (weather.loading) {
    search();
    return "Loading...";
  } else {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type={"search"}
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCitySearch}
              />
            </div>
            <div className="col-3">
              <input type={"submit"} value="Search" className="btn btn-light" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weather} />
      </div>
    );
  }
}
