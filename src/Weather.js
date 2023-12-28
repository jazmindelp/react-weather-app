import "./Weather.css";
import axios from "axios";
import { useState } from "react";
import FormattedDate from "./FormattedDate";
export default function Weather(props) {
  let [weather, setWeather] = useState({ loading: true });
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

  if (weather.loading) {
    const apiKey = "325bc6t05fe26b896fe3169ea4b9o059";

    let url = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
    return "Loading...";
  } else {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type={"search"}
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type={"submit"} value="Search" className="btn btn-light" />
            </div>
          </div>
        </form>
        <h1>{weather.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weather.date} />
          </li>
          <li>{weather.description}</li>
        </ul>
        <div className="row">
          <div className="col-6 ">
            <span className="d-flex align-items-center">
              <img
                src={weather.icon}
                alt="weather icon"
                className="img-fluid"
              />

              <span className="temperature">
                {Math.round(weather.temperature)}
              </span>
              <span className="unit">°C</span>
            </span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
