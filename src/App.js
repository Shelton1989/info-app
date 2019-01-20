import React, {Component} from 'react';
import Navbar from './components/Navbar';
import Title from './components/Titles';
import WeatherForm from './components/WeatherForm';
import Weather from './components/Weather';
import './css/App.css';

const apiKey = '558723668267d7a6a5e72566b75d0998';
const country_code = 'ZA';

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  }

  getWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country_code}&appid=${apiKey}`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: '',
    });
  }

  render(){
    return (
      <div>
        <Navbar />
        <div className="row">
          <div className="div-container">
            <Title />
            <WeatherForm getWeather={this.getWeather} />
            <Weather />
          </div>
        </div>
      </div>
    );
  }
}

export default App;