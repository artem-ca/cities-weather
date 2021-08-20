import React from 'react'

const Form = (props) => (
  <form onSubmit={props.gettingWeather}>
    <input type='text' name='city' placeholder='Город' />
    <button>Получить погоду</button>
  </form>
)

export default Form
