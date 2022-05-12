const StoreItem = props => {
  const storeItem = props.storeItem
  const addItemToCart = props.addItemToCart

  return (
    <li>
      <div className="store--item-icon">
        <img src={`/assets/icons/${storeItem.id}.svg`} alt={storeItem.name} />
      </div>
      <button onClick={() => addItemToCart(storeItem)}>Add to cart</button>
    </li>
  )
}

export default StoreItem
