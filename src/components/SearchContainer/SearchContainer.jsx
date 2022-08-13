import React from 'react'
import './search-container.styles.scss'
import { useDispatch, useSelector } from 'react-redux'

// icons
import { AiOutlineSearch } from 'react-icons/ai'
import { MdClear } from 'react-icons/md'

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
  const clearSearch = () => {
    dispatch(setSearch(''))
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
            autoComplete="false"
            placeholder="Search for a country..."
          />
          <MdClear
            onClick={clearSearch}
            className="search__input__icon-clear"
            size={22}
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
