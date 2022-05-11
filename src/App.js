import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'
import Header from './Header/Header'
import Main from './Main/Main'

import storeItems from './store-items'

const App = () => {
  const [cart, setCart] = useState([])

  const addItemToCart = storeItem => setCart([...cart, storeItem])

  return (
    <div className="app">
      <Header storeItems={storeItems} addItemToCart={addItemToCart} />
      <Main cart={cart} />
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
