import React from 'react';
import Typography from '@material-ui/core/Typography';
import '../css/weather-icons.css';
import '../css/weather-icons.min.css';
import '../components/Weather.css';

function Weather(props){ 
        return(
            <div>
                <Typography >
                    {props.icon ? <p className="weather-icon"><i className={props.icon}></i></p>:<p></p>}
                    {props.city ? <p>Today is {props.temperature}&deg; C in {props.city}</p>: <p></p>}
                    {props.humidity ? <p>Predicted {props.description} and {props.humidity}% humidity.</p>:<p></p>}
                    {props.error ? <p>{props.error}</p>:<p></p>}
                </Typography>
            </div>
        )
    }


export default Weather;