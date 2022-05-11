import CartItemList from './CartItemList'
import TotalSection from './TotalSection'

const Main = props => {
  const cart = props.cart
  const incrementQuantity = props.incrementQuantity
  const decrementQuantity = props.decrementQuantity
  const getTotal = props.getTotal

  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <CartItemList
        cart={cart}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
      />
      <TotalSection getTotal={getTotal} />
    </main>
  )
}

export default Main
