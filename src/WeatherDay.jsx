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

  img {
    width: 100%;
  }
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
  { name: 'sunny', src: '//ssl.gstatic.com/onebox/weather/64/sunny.png' },
  { name: 'rain', src: 'http://ssl.gstatic.com/onebox/weather/64/rain.png' },
  {
    name: 'cloudy',
    src: 'http://ssl.gstatic.com/onebox/weather/64/cloudy.png'
  },
  { name: 'snowy', src: 'http://ssl.gstatic.com/onebox/weather/64/snow.png' }
]

const WeatherDay = ({ day, weather, high, low }) => (
  <Container>
    <Day>{moment.unix(day).format('ddd')}</Day>
    <img
      src={weatherIcons.find(icon => icon.name === weather).src}
      alt={weather}
    />
    <div>
      <Temperature className="high">{high}</Temperature>
      <Temperature>{low}</Temperature>
    </div>
  </Container>
)

export default WeatherDay
