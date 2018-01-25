import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const Container = styled.div`
  display: inline-block;
  border: 1px solid none;
  border-radius: 2px;
  padding: 10px 15px;
  text-align: center;
  color: #bbb;
`

const Day = styled.h3`
  margin: 0;
`

const Temperature = styled.span`
  margin: 5px;

  &.high {
    color: #888;
  }

  &::after {
    content: '°';
  }
`

const weatherIcons = [
  { name: 'Clear', src: '//ssl.gstatic.com/onebox/weather/64/sunny.png' },
  { name: 'Rain', src: 'http://ssl.gstatic.com/onebox/weather/64/rain.png' },
  {
    name: 'Clouds',
    src: 'http://ssl.gstatic.com/onebox/weather/64/cloudy.png'
  },
  { name: 'Snow', src: 'http://ssl.gstatic.com/onebox/weather/64/snow.png' }
]

const WeatherDay = ({ day, weather, high, low }) => (
  <Container>
    <Day>{moment.unix(day).format('ddd')}</Day>
    <img
      src={weatherIcons.find(icon => icon.name === weather.main).src}
      alt={weather}
    />
    <div>
      <Temperature className="high">{Math.round(high)}</Temperature>
      <Temperature>{Math.round(low)}</Temperature>
    </div>
  </Container>
)

export default WeatherDay
