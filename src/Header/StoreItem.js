const StoreItem = props => {
  const storeItem = props.storeItem
  return (
    <li>
      <div class="store--item-icon">
        <img src={`/assets/icons/${storeItem.id}.svg`} alt={storeItem.name} />
      </div>
      <button>Add to cart</button>
    </li>
  )
}

export default StoreItem
