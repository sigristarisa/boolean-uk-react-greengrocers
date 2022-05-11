const CartItem = props => {
  const cartItem = props.cartItem
  const handleQuantity = props.handleQuantity

  return (
    <li>
      <img
        className="cart--item-icon"
        src={`/assets/icons/${cartItem.id}.svg`}
        alt={cartItem.name}
      />
      <p>{cartItem.name}</p>
      <button
        className="quantity-btn remove-btn center"
        onClick={() => handleQuantity('-', cartItem)}
      >
        -
      </button>
      <span className="quantity-text center">{cartItem.quantity}</span>
      <button
        className="quantity-btn add-btn center"
        onClick={() => handleQuantity('+', cartItem)}
      >
        +
      </button>
    </li>
  )
}

export default CartItem
