import ForecastDay from "./ForecastDay";
import "./Forecast.css";
import axios from "axios";
import { useState } from "react";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  if (loaded) {
    console.log(forecast);
    console.log(props.query);
    return (
      <div className="Forecast mx-auto">
        <div className="row ">
          <div className="col ">
            <div className="forecast-day-container">
              <ForecastDay data={forecast[0]} />
            </div>
          </div>
          <div className="col ">
            <div className="forecast-day-container">
              <ForecastDay data={forecast[1]} />
            </div>
          </div>
          <div className="col ">
            <div className="forecast-day-container">
              <ForecastDay data={forecast[2]} />
            </div>
          </div>
          <div className="col ">
            <div className="forecast-day-container">
              <ForecastDay data={forecast[3]} />
            </div>
          </div>
          <div className="col ">
            <div className="forecast-day-container">
              <ForecastDay data={forecast[4]} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "325bc6t05fe26b896fe3169ea4b9o059";

    let url = `https://api.shecodes.io/weather/v1/forecast?query=${props.query}&key=${apiKey}`;
    function handleResponse(response) {
      setForecast(response.data.daily);
      setLoaded(true);
    }
    axios.get(url).then(handleResponse);
    return null;
  }
}
