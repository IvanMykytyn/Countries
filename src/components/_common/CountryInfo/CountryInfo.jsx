import React from 'react'
import './country-info.styles.scss'

const CountryInfo = ({ title, text }) => {
  return (
    <p className="country-info__p">
      <b>{title}:</b> {text}
    </p>
  )
}

export default CountryInfo
