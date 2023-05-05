const WeatherCard = ({data}) => {
  console.log(data);

  return (
    <div>
      <h2></h2>
      <h3></h3>
      <p>
       
      </p>
      <img src={data.current.condition.icon}></img>
    </div>
  );
};

export default WeatherCard;
