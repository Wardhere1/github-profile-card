import React from "react";
import PropTypes from "prop-types";

const MainContent = ({ weatherData }) => {
  MainContent.propTypes = {
    cityName: PropTypes.string.isRequired,
    // weatherData: PropTypes.shape({}),
  };
  console.log(weatherData);
  console.log(weatherData.weather[0]);
  // the cant access the description on weather array
  // weatherData.weather gives us an array of objects. 0:{id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d'}
  // try acess the description and render that to the page
  return (
    <div className="main-content-container">
      <input className="city-input-field"></input>
      <button>submit!</button>
      <h1>weather in:{weatherData.name}</h1>
      {weatherData.main?.temp && <h2>Temperature: {weatherData.main.temp}</h2>}
      {weatherData.main?.humidity && (
        <p>Humidity:{weatherData.main.humidity}%</p>
      )}
      {weatherData.wind?.speed && (
        <p>Wind Speed:{weatherData.wind?.speed}km/h</p>
      )}
      {/* {weatherData && <p>Description: {weatherData.weather}</p>} */}
    </div>
  );
};

export default MainContent;
