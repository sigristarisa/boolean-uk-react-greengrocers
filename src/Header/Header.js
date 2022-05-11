import StoreItemList from './StoreItemList'

const Header = props => {
  const storeItems = props.storeItems
  const addItemToCart = props.addItemToCart
  const filterStoreItems = props.filterStoreItems

  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <label htmlFor="#filter-by" name="type">
        Filter By
      </label>
      <select id="filter-by" onChange={e => filterStoreItems(e.target.value)}>
        <option value="all">All</option>
        <option value="vegetable">Vegetable</option>
        <option value="fruit">Fruit</option>
      </select>

      <StoreItemList storeItems={storeItems} addItemToCart={addItemToCart} />
    </header>
  )
}

export default Header
