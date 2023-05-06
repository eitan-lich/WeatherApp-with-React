import { useEffect } from "react";
import "./WeatherCard.css";

const WeatherCard = ({ data }) => {
  console.log(data);

  useEffect(() => {
    const timeOfDay = data.current.condition.icon;
    if (timeOfDay.includes("day")) {
      document.body.style = "background:linear-gradient(to bottom, #9be2fe 0%, #67d1fb 100%);";
    } else if (timeOfDay.includes("night")) {
      document.body.style = "background:black;";
    } else {
      document.body.style = "background:white;";
    }
  }, [data]);

  return (
    <div className="card">
      <img
        src={data.current.condition.icon}
        style={{ width: "15%" }}
        className="card-img-top"
      ></img>
      <div className="card-body">
        <p className="card-text">
          <p>
            {data.location.localtime.substring(11)}{" "}
            {data.current.condition.text}
          </p>
          The temperature in {data.location.country}, {data.location.name} is{" "}
          {data.current.temp_c} degrees Celsius and {data.current.temp_f}{" "}
          degrees Fahrenheit.
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
