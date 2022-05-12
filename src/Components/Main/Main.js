import CartItemList from './CartItemList'
import TotalSection from './TotalSection'
import '../../styles/Main.css'

const Main = props => {
  const cart = props.cart
  const incrementQuantity = props.incrementQuantity
  const decrementQuantity = props.decrementQuantity
  const getTotal = props.getTotal
  const displayDetail = props.displayDetail
  const isDetailDisplayed = props.isDetailDisplayed
  const clickedStoreItem = props.clickedStoreItem

  return (
    <main>
      {displayDetail ? (
        <div className="cart">
          <h2>{clickedStoreItem.name}</h2>
          <p>{clickedStoreItem.facts}</p>
          <button onClick={() => isDetailDisplayed(false, '')}>Back</button>
        </div>
      ) : (
        <div className="cart">
          <h2>Your Cart</h2>
          <CartItemList
            cart={cart}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
          <TotalSection getTotal={getTotal} />
        </div>
      )}
    </main>
  )
}

export default Main
