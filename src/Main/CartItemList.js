import CartItem from './CartItem'

const CartItemList = props => {
  const cart = props.cart
  const incrementQuantity = props.incrementQuantity
  const decrementQuantity = props.decrementQuantity

  return (
    <div className="cart--item-list-container">
      <ul className="item-list cart--item-list">
        {cart.map((cartItem, index) => (
          <CartItem
            key={index}
            cartItem={cartItem}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
        ))}
      </ul>
    </div>
  )
}

export default CartItemList
