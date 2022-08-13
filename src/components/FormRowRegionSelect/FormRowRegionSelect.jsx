import './form-row-select.styles.scss'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// actions
import {
  getRegionCountries,
  setSearchCountries,
} from '../../features/country/countrySlice'

// icons
import { RiArrowDropDownLine } from 'react-icons/ri'
import { useEffect } from 'react'

const FormRowRegionSelect = ({ list }) => {
  // global state
  const dispatch = useDispatch()
  const { search } = useSelector((store) => store.country)

  // local state
  const [isOpenDropDown, setIsOpenDropDown] = useState(false)
  const [filter, setFilter] = useState('All')

  // Handle Filter
  const handleFilter = (region) => {
    setFilter(region)
    setIsOpenDropDown((prev) => !prev)
  }

  // on filter change get countries
  useEffect(() => {
    dispatch(getRegionCountries(filter))
  }, [filter])

  useEffect(() => {
    dispatch(setSearchCountries())
  }, [search])

  return (
    <div className="form-row">
      <button
        className="form-row__select"
        onClick={() => setIsOpenDropDown((prev) => !prev)}
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
