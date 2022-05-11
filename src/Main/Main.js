import CartItemList from './CartItemList'

const Main = props => {
  const cart = props.cart
  const incrementQuantity = props.incrementQuantity
  const decrementQuantity = props.decrementQuantity

  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <CartItemList
        cart={cart}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
      />
      <div className="total-section">
        <div>
          <h3>Total</h3>
        </div>
        <div>
          <span className="total-number">£0.00</span>
        </div>
      </div>
    </main>
  )
}

export default Main
