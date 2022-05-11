import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'
import Header from './Header/Header'
import Main from './Main/Main'

import storeItems from './store-items'

const App = () => {
  const [cart, setCart] = useState([])

  const findItemById = storeItem => cart.find(item => item.id === storeItem.id)

  const addItemToCart = storeItem => {
    if (!findItemById(storeItem)) {
      const addedItem = { ...storeItem, quantity: 1 }
      setCart([...cart, addedItem])
    }
  }

  const incrementQuantity = cartItem => {
    cartItem.quantity += 1
    setCart([...cart])
  }

  const decrementQuantity = cartItem => {
    if (cartItem.quantity > 0) {
      cartItem.quantity -= 1
      setCart([...cart])
    }
    if (cartItem.quantity === 0) {
      const updatedCart = cart.filter(item => item !== cartItem)
      setCart(updatedCart)
    }
  }

  return (
    <div className="app">
      <Header storeItems={storeItems} addItemToCart={addItemToCart} />
      <Main
        cart={cart}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
      />
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  )
}

export default App
