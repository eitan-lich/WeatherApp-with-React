const WeatherCard = ({ data }) => {
  console.log(data);

  return (
    <div className="card">
      <img
        src={data.current.condition.icon}
        style={{ width: "20%" }}
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
