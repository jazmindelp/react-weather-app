import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-8">
            <input
              type={"search"}
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-4">
            <input type={"submit"} value="Search" className="btn btn-light" />
          </div>
        </div>
      </form>
      <h1>Pilar</h1>
      <ul>
        <li>Thursday 15:00</li>
        <li>Mostly cloudly</li>
      </ul>
      <div className="row">
        <div className="col-6 ">
          <span className="d-flex align-items-center">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="weather icon"
              className="img-fluid"
            />

            <span className="temperature">33</span>
            <span className="unit">°C</span>
          </span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 60%</li>
            <li>Wind: 16 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
