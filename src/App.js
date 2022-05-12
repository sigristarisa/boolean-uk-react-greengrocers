import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import initialStoreItems from './store-items'

const App = () => {
  const [cart, setCart] = useState([])
  const [storeItems, setStoreItems] = useState(initialStoreItems)

  const findItemById = storeItem =>
    cart.find(cartItem => cartItem.id === storeItem.id)

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

  const sortStoreItems = method => {
    const copiedStoreItems = [...storeItems]
    if (method === 'lowToHigh') {
      copiedStoreItems.sort((storeItem1, storeItem2) => {
        return storeItem1.price - storeItem2.price
      })
    }
    if (method === 'highToLow') {
      copiedStoreItems.sort((storeItem1, storeItem2) => {
        return storeItem2.price - storeItem1.price
      })
    }
    if (method === 'name') {
      copiedStoreItems.sort((storeItem1, storeItem2) => {
        return storeItem1.name.localeCompare(storeItem2.name)
      })
    }
    setStoreItems(copiedStoreItems)
  }

  return (
    <div className="app">
      <Header
        storeItems={storeItems}
        addItemToCart={addItemToCart}
        filterStoreItems={filterStoreItems}
        sortStoreItems={sortStoreItems}
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
