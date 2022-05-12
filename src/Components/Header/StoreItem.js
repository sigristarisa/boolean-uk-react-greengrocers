const StoreItem = props => {
  const storeItem = props.storeItem
  const addItemToCart = props.addItemToCart
  const isDetailDisplayed = props.isDetailDisplayed

  return (
    <li>
      <div className="store--item-icon">
        <img src={`/assets/icons/${storeItem.id}.svg`} alt={storeItem.name} />
      </div>
      <div className="store-button-wrapper">
        <button onClick={() => addItemToCart(storeItem)}>+</button>
        <button onClick={() => isDetailDisplayed(true, storeItem)}>
          <img
            className="file-icon"
            src="../../assets/icons/file.png"
            alt="file-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default StoreItem
