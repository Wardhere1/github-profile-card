import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  const apiKey = "a5d4d65e2b0cb9a20513922fbcefbe2f";
  const [cityName, setCityName] = useState("london");
  const [weatherData, setWeatherData] = useState({});
  App.propTypes = {
    cityName: PropTypes.string.isRequired,
  };
  useEffect(() => {
    async function getWeather() {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      // console.log(data);
      setWeatherData(data);
      // return data;
    }
    getWeather();
  }, []);

  // console.log(weatherData.main);
  // console.log(weatherData?.main?.temp);
  return (
    <div className="content-contiainer">
      <Header />
      <MainContent cityName={cityName} weatherData={weatherData} />
      <Footer />
    </div>
  );
}

export default App;
