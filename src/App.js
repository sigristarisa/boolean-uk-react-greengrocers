import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import initialStoreItems from './store-items'

const App = () => {
  const [cart, setCart] = useState([])
  const [storeItems, setStoreItems] = useState(initialStoreItems)

  const findItemById = storeItem =>
    cart.find(cartItem => cartItem.id === storeItem.id)

  const filterStoreItems = type => {
    if (type === 'all') {
      setStoreItems(initialStoreItems)
    } else {
      const filteredItems = initialStoreItems.filter(
        storeItem => storeItem.type === type
      )
      setStoreItems(filteredItems)
    }
  }

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

  const getTotal = () => {
    const cartItemPriceArr = cart.map(item => item.price * item.quantity)
    const total = cartItemPriceArr.reduce((price1, price2) => {
      return price1 + price2
    }, 0)
    return parseFloat(total).toFixed(2)
  }

  return (
    <div className="app">
      <Header
        storeItems={storeItems}
        addItemToCart={addItemToCart}
        filterStoreItems={filterStoreItems}
      />
      <Main
        cart={cart}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        getTotal={getTotal}
      />
      <Footer />
    </div>
  )
}

export default App
