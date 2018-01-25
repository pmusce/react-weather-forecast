import React from 'react'
import WeatherDay from './WeatherDay'
import forecastData from './example.json'

class WeatherForecast extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      forecast: forecastData
    }
  }

  render() {
    const { forecast } = this.state
    return (
      <div>
        {forecast.list.map(item => (
          <WeatherDay
            day={item.dt}
            weather={item.weather[0]}
            high={item.temp.max}
            low={item.temp.min}
          />
        ))}
      </div>
    )
  }
}

export default WeatherForecast
