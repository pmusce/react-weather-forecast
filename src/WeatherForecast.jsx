import React from 'react'
import WeatherDay from './WeatherDay'
import WeatherDetail from './WeatherDetail'
import moment from 'moment'
import axios from 'axios'

import styled from 'styled-components'

const Container = styled.div`
  margin: 20px;
  padding: 20px 20px;
  border: 1px solid #eee;
  border-radius: 4px;
  display: inline-block;
`

const DaysContainer = styled.div`
  display: inline-block;
`

class WeatherForecast extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      forecast: undefined,
      hourlyForecast: undefined,
      selected: undefined
    }
  }

  componentDidMount() {
    const appid = '45e97efeb646071cbbc753932df57a4f'
    const numberOfDays = 5

    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast/daily?q=Bari,IT&appid=${appid}&units=metric&cnt=${numberOfDays}`
      )
      .then(res => {
        const forecast = res.data
        this.setState({ forecast })
      })

    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=Bari,IT&appid=${appid}&units=metric`
      )
      .then(res => {
        const hourlyForecast = res.data
        this.setState({ hourlyForecast })
      })
  }

  openDetail = day => {
    this.setState({ selected: day })
  }

  getHourlyWeatherData = () => {
    const { hourlyForecast, selected } = this.state
    const selectedDay = moment.unix(selected).date()

    return hourlyForecast.list.filter(
      item => moment.unix(item.dt).date() === selectedDay
    )
  }

  render() {
    const { forecast, selected } = this.state
    return (
      <Container>
        <DaysContainer>
          {forecast &&
            forecast.list.map(item => (
              <WeatherDay
                key={item.dt}
                day={item.dt}
                weather={item.weather[0]}
                high={item.temp.max}
                low={item.temp.min}
                onClick={() => this.openDetail(item.dt)}
                selected={
                  moment.unix(item.dt).date() === moment.unix(selected).date()
                }
              />
            ))}
        </DaysContainer>
        {selected && (
          <WeatherDetail weatherData={this.getHourlyWeatherData()} />
        )}
      </Container>
    )
  }
}

export default WeatherForecast
