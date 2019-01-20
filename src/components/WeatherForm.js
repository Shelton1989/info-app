import React, {Component} from 'react';

class WeatherForm extends Component{
    render(){
        return(
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="Johannesburg"/>
                <button className="app-button" type="submit">Get Weather</button>
            </form>
        );
    }
}

export default WeatherForm;