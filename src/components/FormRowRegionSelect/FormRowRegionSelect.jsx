import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './form-row-select.styles.scss'

// actions
import { setRegion } from '../../features/countrySlice'
import { getCountries } from '../../features/countrySlice'

// icons
import { RiArrowDropDownLine } from 'react-icons/ri'
import { useEffect } from 'react'

const FormRowRegionSelect = ({ list }) => {
  const dispatch = useDispatch()
  const { search } = useSelector((store) => store.country)
  const [isOpenDropDown, SetIsOpenDropDown] = useState(false)
  const [filter, setFilter] = useState('All')

  const handleFilter = (region) => {
    setFilter(region)
    SetIsOpenDropDown((prev) => !prev)
  }

  useEffect(() => {
    dispatch(setRegion(filter))
    dispatch(getCountries())
  }, [search, filter])

  return (
    <div className="form-row">
      <button
        className="form-row__select"
        onClick={() => SetIsOpenDropDown((prev) => !prev)}
      >
        <p>
          {isOpenDropDown || filter === 'All' ? 'Filter by Region' : filter}
        </p>
        <RiArrowDropDownLine
          size={26}
          style={{ transform: `rotate(${isOpenDropDown ? '180deg' : '0'})` }}
        />
      </button>
      <div className={isOpenDropDown ? 'form-row__options' : ''}>
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

export default FormRowRegionSelect
