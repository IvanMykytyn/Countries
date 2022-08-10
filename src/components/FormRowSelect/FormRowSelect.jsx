import React, { useState } from 'react'
import './form-row-select.styles.scss'

// icons
import { RiArrowDropDownLine } from 'react-icons/ri'


const FormRowSelect = ({ name, value, handleChange, list }) => {
  const [isOpenDropDown, SetIsOpenDropDown] = useState(false)
  const [filter, setFilter] = useState('')

  const handleFilter = (region) => {
    console.log(filter)
    setFilter(region)
    SetIsOpenDropDown((prev) => !prev)
  }

  return (
    <div className="form-row">
      <button
        name={name}
        className="form-row__select"
        onClick={() => SetIsOpenDropDown((prev) => !prev)}
      >
        <p>{isOpenDropDown || !filter ? 'Filter by Region' : filter}</p>
        <RiArrowDropDownLine
          size={26}
          style={{ transform: `rotate(${isOpenDropDown ? '180deg' : '0'})` }}
        />
      </button>
      <div className={isOpenDropDown && 'form-row__options'}>
        {isOpenDropDown &&
          list.map((itemValue, index) => {
            return (
              <div
                onClick={() => handleFilter(itemValue)}
                key={index}
                className="form-row__option"
              >
                <p>{itemValue}</p>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default FormRowSelect
