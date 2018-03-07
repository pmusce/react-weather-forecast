import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 1em;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-around;
  text-align: center;
`

const Temperature = styled.div`
  color: #888;
`

const Hour = styled.div`
  color: #ccc;
  font-size: 0.9em;
`

const WeatherDetail = ({ weatherData }) => (
  <Container>
    {weatherData.map(hourlyData => (
      <div style={{ display: 'inline-block' }}>
        <Temperature>{Math.round(hourlyData.main.temp)}°</Temperature>
        <Hour>{moment.unix(hourlyData.dt).format('k:mm')}</Hour>
      </div>
    ))}
  </Container>
)

export default WeatherDetail
