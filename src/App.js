import React, { Component } from 'react'
import WeatherDay from './WeatherDay'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = [
      { day: 1406106000, weather: 'sunny', high: 12, low: 4 },
      { day: 1406106000, weather: 'rain', high: 22, low: 14 }
    ]
  }

  render() {
    return (
      <div className="App">
        {this.state.map(item => (
          <WeatherDay
            day={item.day}
            weather={item.weather}
            high={item.high}
            low={item.low}
          />
        ))}
      </div>
    )
  }
}

export default App
