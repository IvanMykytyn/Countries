import './country-info.styles.scss'

import React from 'react'

const CountryInfo = ({ title, text }) => {
  return (
    <p className='country-info__p'>
      <b>{title}:</b> {text}
    </p>
  )
}

export default CountryInfo
