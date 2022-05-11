import StoreItemList from './StoreItemList'

const Header = props => {
  const storeItems = props.storeItems
  const addItemToCart = props.addItemToCart

  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <StoreItemList storeItems={storeItems} addItemToCart={addItemToCart} />
    </header>
  )
}

export default Header
