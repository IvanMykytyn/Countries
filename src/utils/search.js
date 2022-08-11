export const handleSearch = (
  array,
  search,
  searchParam = ['capital', 'name']
) => {
  return array.filter((country) => {
    return searchParam.some((newItem) => {
      return (
        country[newItem]
          .toString()
          .toLowerCase()
          .indexOf(search.toLowerCase()) > -1
      )
    })
  })
}
