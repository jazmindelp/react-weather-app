import { useState } from "react";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <span>
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |
          <a href="/" onClick={showFahrenheit} className="mx-1">
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span>
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius} className="mx-1">
            °C
          </a>
          | °F
        </span>
      </span>
    );
  }
}
