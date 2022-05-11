import StoreItem from './StoreItem'

const StoreItemList = props => {
  const storeItems = props.storeItems
  return (
    <ul className="item-list store--item-list">
      {storeItems.map((storeItem, index) => {
        ;<StoreItem key={index} storeItem={storeItem} />
      })}
    </ul>
  )
}

export default StoreItemList
