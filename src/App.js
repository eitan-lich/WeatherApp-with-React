import { useState } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard";

const App = () => {
  const fetchWeather = () => {
    const API_KEY = "e77fef6f1f5549e98fe112224230505";
    const baseUrl = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setValidRequest(true);
      })
      .catch((error) => {
        setValidRequest(false);
        console.log(error);
      });
  };

  const [city, setCity] = useState("");
  const [data, setData] = useState({});
  const [validRequest, setValidRequest] = useState(false);

  console.log(validRequest);

  return (
    <div className="container-fluid w-25">
      <div className="input-group mb-3">
        <span className="input-group-text">&#127968;</span>
        <input
          type="text"
          className="form-control"
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather} className="btn btn-primary">
          Find
        </button>
      </div>

      {validRequest ? (
        <WeatherCard data={data}/>
      ) : null}
    </div>
  );
};

export default App;
