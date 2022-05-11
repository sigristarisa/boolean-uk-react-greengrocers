import CartItem from './CartItem'

const CartItemList = props => {
  const cart = props.cart
  const handleQuantity = props.handleQuantity

  return (
    <div className="cart--item-list-container">
      <ul className="item-list cart--item-list">
        {cart.map((cartItem, index) => (
          <CartItem
            key={index}
            cartItem={cartItem}
            handleQuantity={handleQuantity}
          />
        ))}
      </ul>
    </div>
  )
}

export default CartItemList
