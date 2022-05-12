import StoreItem from './StoreItem'

const StoreItemList = props => {
  const storeItems = props.storeItems
  const addItemToCart = props.addItemToCart

  return (
    <ul className="item-list store--item-list">
      {storeItems.map((storeItem, index) => (
        <StoreItem
          key={index}
          storeItem={storeItem}
          addItemToCart={addItemToCart}
        />
      ))}
    </ul>
  )
}

export default StoreItemList
