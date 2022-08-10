import React from 'react'
import './search-container.styles.scss'

// icons
import { AiOutlineSearch } from 'react-icons/ai'

// components
import { FormRowSelect } from '../'

// utils
import regions from '../../utils/regions'

const SearchContainer = () => {
  return (
    <div className="search">
      <div className="search__container">
        <div className="search__input">
          <AiOutlineSearch className="search__input__icon" size={26} />
          <input
            type="text"
            name="search"
            placeholder="Search for a country..."
          />
        </div>
        <div className="search_filter">
          <FormRowSelect name="region" list={regions} />
        </div>
      </div>
    </div>
  )
}

export default SearchContainer
