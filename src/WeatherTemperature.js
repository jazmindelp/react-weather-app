export default function WeatherTemperature(props) {
  return (
    <span>
      <span className="temperature ms-3">{Math.round(props.celsius)}</span>
      <span className="unit">°C</span>
    </span>
  );
}
