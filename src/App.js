import React from 'react'

import Info from './Components/Info'
import Weather from './Components/Weather'
import Form from './Components/Form'

import './App.css'

const API_KEY = '6f77c624e27be5f8a02f8d28bc9a8634'

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    // sunrise: undefined,
    sunset: undefined,
    error: undefined,
  }

  gettingWeather = async (e) => {
    e.preventDefault()
    var city = e.target.elements.city.value

    if (city) {
      const api_url = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      )
      const data = await api_url.json()

      // var sunrise_data = data.sys.sunrise
      var sunset_data = data.sys.sunset

      // var date_sunrise = new Date()
      var date_sunset = new Date()

      // date_sunrise.setTime(sunrise_data)
      date_sunset.setTime(sunset_data)

      // var sunrise =
      //   sunrise.getHours() +
      //   ':' +
      //   sunrise.getMinutes() +
      //   ':' +
      //   sunrise.getSeconds()

      var sunset =
        date_sunset.getHours() +
        ':' +
        date_sunset.getMinutes() +
        ':' +
        date_sunset.getSeconds()

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunset,
        error: undefined,
      })
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        // sunrise: undefined,
        sunset: undefined,
        error: 'Ошиб0чка!',
      })
    }
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='main'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-5 info'>
                <Info />
              </div>
              <div className='col-sm-7 form'>
                <Form gettingWeather={this.gettingWeather} />
                <Weather
                  temp={this.state.temp}
                  city={this.state.city}
                  country={this.state.country}
                  pressure={this.state.pressure}
                  // sunrise={this.state.sunrise}
                  sunset={this.state.sunset}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App
