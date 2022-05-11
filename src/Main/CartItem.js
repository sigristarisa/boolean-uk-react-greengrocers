const CartItem = props => {
  const cartItem = props.cartItem
  return (
    <li>
      <img
        className="cart--item-icon"
        src={`assets/icons/${cartItem.id}.svg`}
        alt={cartItem.name}
      />
      <p>{cartItem.name}</p>
      <button className="quantity-btn remove-btn center">-</button>
      <span className="quantity-text center">1</span>
      <button className="quantity-btn add-btn center">+</button>
    </li>
  )
}

export default CartItem
