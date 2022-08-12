import React, { useState } from 'react'
import './search-container.styles.scss'
import { useDispatch, useSelector } from 'react-redux'

// icons
import { AiOutlineSearch } from 'react-icons/ai'

// components
import { FormRowRegionSelect } from '../'

// utils
import regions from '../../utils/regions'

// actions
import { setSearch } from '../../features/country/countrySlice'

const SearchContainer = () => {
  const dispatch = useDispatch()
  const { search } = useSelector((store) => store.country)

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value))
  }

  return (
    <div className="search">
      <div className="search__container">
        <div className="search__input">
          <AiOutlineSearch className="search__input__icon" size={26} />
          <input
            type="text"
            name="search"
            value={search}
            onChange={handleSearch}
            placeholder="Search for a country..."
          />
        </div>
        <div className="search_filter">
          <FormRowRegionSelect list={regions} />
        </div>
      </div>
    </div>
  )
}

export default SearchContainer
