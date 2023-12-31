import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6 ">
          <span className="d-flex align-items-center">
            <WeatherIcon iconCode={props.data.icon} size={64} color="#f9f3cc" />
            <WeatherTemperature celsius={props.data.temperature} />
          </span>
        </div>
        <div className="col-6 d-flex align-items-center">
          <div className="pe-1">
            <strong>Humidity:</strong> {props.data.humidity}%
          </div>
          <div className="ps-1">
            <strong>Wind:</strong> {props.data.wind} km/h
          </div>
        </div>
      </div>
    </div>
  );
}
