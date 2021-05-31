
import React, {useState, useEffect} from 'react'
import './App.css';
import { Products, Navbar } from './components'



const App = () => {
  /// Static information
  const [prod1] = useState({id: 1, name: 'Shoes', description: 'These are <b>running shoes<b>', price: '$5', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cushion-shoes-7659-1584132587.jpg?crop=1.00xw:0.701xh;0,0.229xh&resize=1200:*' })
  const [prod2] = useState({id: 2, name: 'MacBook', description: 'Apple macbook. A great <b>computer</b>', price: '$1200', image: 'https://www.bhphotovideo.com/images/images2500x2500/apple_z0wq_mv96_12_bh_13_3_macbook_pro_with_1481053.jpg' })

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  
  const fetchCart = async () => {
    // Use Strapi CMS to get the user cart state, but for now this is static
    // const response = await strapi.cart.get()
    const cart = {lineItems: [prod1], shippingInfo: {}, discountCodes: [], currency: 'Eur', }
    setCart(cart)
  }

  const handleAddToCart = async (produtId, quantity) => {
    console.log("This would add something to your cart ("+produtId+", "+quantity+")")
  }

  const fetchProducts = async () => {
    // Use Strapi CMS to get the list of products, but for now this is static
    // const response = await strapi.products.list()
    const products = [prod1, prod2]
    setProducts(products)
  }

  useEffect( () => {
    fetchProducts()
    fetchCart()
  }, [])


  return (
    <div>
      <Navbar />
      <Products products={products} onAddToCart={handleAddToCart}/>
    </div>
  );
}

export default App;
