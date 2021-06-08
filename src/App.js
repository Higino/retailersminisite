
import React, {useState, useEffect} from 'react'
import './App.css';
import { Products, Navbar, Cart } from './components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



const App = () => {
  const [cart, setCart] = useState({line_items: []})
  const [cartSize, setCartSize] = useState(0)

  
  const handleAddToCart = async (product, quantity) => {
    const newCart = cart
    newCart.line_items.push(product)
    setCart( newCart )
    setCartSize( newCart.line_items.length)
  }

  const fetchCart = async () => {
    // Use Strapi CMS to get the user cart state, but for now this is static
    // const response = await strapi.cart.get()
    setCart(cart)
    setCartSize(cart.line_items.length)
  }

  const handleEmptyCart = () => { }

  const handleRemoveFromCart = () => {}
  
  const handleUpdateQuantity = () => {}

  useEffect( () => {
    fetchCart()
  }, [])

  return (
    <Router>
      <div>
        <Navbar cartSize={cartSize}/>
        <Switch>
          <Route exact path='/'>
            <Products onAddToCart={handleAddToCart}/> 
          </Route>
          <Route exact path='/cart'>
            <Cart onEmptyCart={handleEmptyCart} onRemoveFromCart={handleRemoveFromCart} onUpdateCartQty={handleUpdateQuantity} cart = {cart} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
