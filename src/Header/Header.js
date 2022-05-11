import StoreItemList from './StoreItemList'
import FilterBy from './FilterBy'

const Header = props => {
  const storeItems = props.storeItems
  const addItemToCart = props.addItemToCart
  const filterStoreItems = props.filterStoreItems

  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <FilterBy filterStoreItems={filterStoreItems} />
      <StoreItemList storeItems={storeItems} addItemToCart={addItemToCart} />
    </header>
  )
}

export default Header
