const SortBy = props => {
  const sortStoreItems = props.sortStoreItems

  return (
    <div>
      <label htmlFor="#sort-by" name="sort">
        Sort By
      </label>
      <select id="sort-by" onChange={e => sortStoreItems(e.target.value)}>
        <option value="lowToHigh'">Low to High</option>
        <option value="highToLow">High to Low</option>
        <option value="name">Name</option>
      </select>
    </div>
  )
}

export default SortBy
