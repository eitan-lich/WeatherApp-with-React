import { useEffect } from "react";
import "./WeatherCard.css";

const WeatherCard = ({ data }) => {
  console.log(data);

  useEffect(() => {
    const timeOfDay = data.current.condition.icon;
    if (timeOfDay.includes("day")) {
      document.body.style = "background-color:rgba(207, 232, 255, 1);";
    } else if (timeOfDay.includes("night")) {
      document.body.style = "background:rgba(44, 50, 56, 0.99);";
    } else {
      document.body.style = "background:rgba(230, 230, 230, 1);";
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
