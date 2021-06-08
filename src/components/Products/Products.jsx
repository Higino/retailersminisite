import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ onAddToCart }) => {
  const classes = useStyles();

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchProducts = async () => {
    const { REACT_APP_API_SERVER_URL } = process.env;
    let token = await axios
    .post('http://'+REACT_APP_API_SERVER_URL+'/auth/local', {
      identifier: 'higino@creoate.com',
      password: 'MdcPsp123',
    })
    .then(response => {
      //Store user token in cookie or localstorage, then use it in all next requests.
      console.log('Your user token', response.data.jwt);
      return response.data.jwt
    })
    .catch(error => {
      // Something wrong with auth. Wrong credentials maybe.
      console.log('An error occurred:', error.response);
    });
    
    
    console.log('Loading products ...')
    let data = await axios
    .get('http://'+REACT_APP_API_SERVER_URL+'/products', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      // Handle success.
      return response
    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error.response);
    });   

    //console.log(data.data[0])
    setProducts(data?.data);
    data ? setLoading(false) : setLoading(true)
  }
  
  useEffect(() => {
    fetchProducts()
  }, [])

  if (loading) return <div style={{paddingTop: '100px'}}>Loading Products ...</div>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;