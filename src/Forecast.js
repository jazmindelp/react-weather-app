import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  let apiKey = "325bc6t05fe26b896fe3169ea4b9o059";
  let city = props.query;
  let url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
  function handleResponse(response) {
    console.log(response.data);
  }
  axios.get(url).then(handleResponse);
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day pb-1">Thu</div>
          <WeatherIcon iconCode="clear-sky-day" size={30} color="#86b7fe" />
          <div className="forecast-temp ">
            <span className="max-temp mx-1">30°</span>

            <span className="min-temp mx-1">20°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
