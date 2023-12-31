import WeatherIcon from "./WeatherIcon";
export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="ForecastDay">
      <div className="forecast-day pb-1">{day()}</div>
      <WeatherIcon
        iconCode={props.data.condition.icon}
        size={30}
        color="#86b7fe"
      />
      <div className="forecast-temp ">
        <span className="max-temp mx-1">
          {Math.round(props.data.temperature.maximum)}°
        </span>

        <span className="min-temp mx-1">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
