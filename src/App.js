
import React, {useState, useEffect} from 'react'
import './App.css';
import { Products, Navbar } from './components'



const App = () => {
  /// Static information
  const [prod1] = useState({id: 1, name: 'Shoes', description: 'These are <b>running shoes<b>', price: '$5', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cushion-shoes-7659-1584132587.jpg?crop=1.00xw:0.701xh;0,0.229xh&resize=1200:*' })
  const [prod2] = useState({id: 2, name: 'MacBook', description: 'Apple macbook. A great <b>computer</b>', price: '$1200', image: 'https://www.bhphotovideo.com/images/images2500x2500/apple_z0wq_mv96_12_bh_13_3_macbook_pro_with_1481053.jpg' })
  const [prod3] = useState({id: 3, name: 'MacBookAir', description: 'Apple air book. A great <b>laptop</b>', price: '$750', image: 'https://www.bhphotovideo.com/images/images2500x2500/apple_z0wq_mv96_12_bh_13_3_macbook_pro_with_1481053.jpg' })
  const [prod4] = useState({id: 4, name: 'Runner Shoes', description: 'These are <b>great running shoes<b>', price: '$5', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cushion-shoes-7659-1584132587.jpg?crop=1.00xw:0.701xh;0,0.229xh&resize=1200:*' })

  const [products, setProducts] = useState([])
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
    const cart = {line_items: [] }
    setCart(cart)
    setCartSize(cart.line_items.length)
  }

 

  const fetchProducts = async () => {
    // Use Strapi CMS to get the list of products, but for now this is static
    // const response = await strapi.products.list()
    const products = [prod1, prod2, prod3, prod4]
    setProducts(products)
  }

  useEffect( () => {
    fetchProducts()
    fetchCart()
  }, [])


  console.log(cart)
  return (
    <div>
      <Navbar cartSize={cart.line_items.length}/>
      <Products products={products} onAddToCart={handleAddToCart}/>
    </div>
  );
}

export default App;
