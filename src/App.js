import React, {Component} from 'react';
import Navbar from './components/Navbar';
import Title from './components/Titles';
import WeatherForm from './components/WeatherForm';
import Weather from './components/Weather';
import WeatherIcons from './icons.json';
import './css/App.css';

const apiKey = '558723668267d7a6a5e72566b75d0998';
const country_code = 'ZA';
const units='metric';


class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    error: undefined,
  }

  componentDidMount = async () => {
    const city = 'Johannesburg';
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country_code}&units=${units}&appid=${apiKey}`);
    const data = await api_call.json();

    if (city && !data.message) {
      let prefix = 'wi wi-';
      let prefixTime = '';
      let code = data.weather[0].id;
      let weatherIcon = WeatherIcons[code].icon;
      let today = new Date();
      let hour = today.getHours();
      if (hour > 6 && hour < 19) {
        prefixTime = 'day-';
      } else {
        prefixTime = 'night-';
      }
      let wIcon = prefix + prefixTime + weatherIcon;
      console.log(wIcon)
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: wIcon,
        error: '',
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        humidity: undefined,
        description: undefined,
        icon: undefined,
        error: 'Please enter your city',
      });
    }
  }

  getWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country_code}&units=${units}&appid=${apiKey}`);
    const data = await api_call.json();

    if (city && !data.message) {
      let prefix = 'wi wi-';
      let prefixTime = '';
      let code = data.weather[0].id;
      let weatherIcon = WeatherIcons[code].icon;
      let today = new Date();
      let hour = today.getHours();
      if (hour > 6 && hour < 19) {
        prefixTime = 'day-';
      } else {
        prefixTime = 'night-';
      }
      let wIcon = prefix + prefixTime + weatherIcon;
      console.log(wIcon)
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: wIcon,
        error: '',
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        humidity: undefined,
        description: undefined,
        icon: undefined,
        error: 'Please enter your city',
      });
    }
  }

  render(){
    return (
      <div>
        <Navbar />
        <div className="row">
          <div className="div-container">
            <div className="col-4 padding">
              <Title />
              <Weather 
                temperature={this.state.temperature}
                city={this.state.city}
                humidity={this.state.humidity}
                description={this.state.description}
                icon={this.state.icon}
                error={this.state.error}
              />
              <WeatherForm getWeather={this.getWeather} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;