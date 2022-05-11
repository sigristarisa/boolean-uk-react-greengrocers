import StoreItemList from './StoreItemList'
import FilterBy from './FilterBy'
import SortBy from './SortBy'

const Header = props => {
  const storeItems = props.storeItems
  const addItemToCart = props.addItemToCart
  const filterStoreItems = props.filterStoreItems
  const sortStoreItems = props.sortStoreItems

  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <FilterBy filterStoreItems={filterStoreItems} />
      <SortBy sortStoreItems={sortStoreItems} />
      <StoreItemList storeItems={storeItems} addItemToCart={addItemToCart} />
    </header>
  )
}

export default Header
