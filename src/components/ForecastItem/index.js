import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from '../WeatherLocation/WeatherData';


const ForecastItem = ({ weekDay, hour, data }) => {
    return (
            <div>

                <h2>{weekDay} {hour}hs</h2>
                <WeatherData data={data}></WeatherData>
            </div>
        );
}

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
}

export default ForecastItem;