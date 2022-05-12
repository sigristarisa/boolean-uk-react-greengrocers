const FilterBy = props => {
  const filterStoreItems = props.filterStoreItems

  return (
    <div>
      <label htmlFor="#filter-by" name="type">
        Filter By
      </label>
      <select id="filter-by" onChange={e => filterStoreItems(e.target.value)}>
        <option value="all">All</option>
        <option value="vegetable">Vegetable</option>
        <option value="fruit">Fruit</option>
      </select>
    </div>
  )
}

export default FilterBy
