import CartItemList from './CartItemList'

const Main = props => {
  const cart = props.cart
  const handleQuantity = props.handleQuantity

  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <CartItemList cart={cart} handleQuantity={handleQuantity} />
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
