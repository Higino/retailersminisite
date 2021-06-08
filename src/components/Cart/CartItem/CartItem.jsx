import React from 'react';
import { Typography, Button, Card, CardActions} from '@material-ui/core';

import useStyles from './styles';
import Product from '../../Products/Product/Product';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();

  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <Card className="classes.root">
      <Product product={item}></Product>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, 1)}>-</Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, 1)}>+</Button>
        </div>
        <Button variant="contained" type="button" color="primary" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;

// <Card className="classes.root">
// <CardMedia image={'http://localhost:1337'+item.media[0].formats.small.url} alt={item.name} className={classes.media} />
// <CardContent >
// <div className={classes.cardContent}>
//   <Typography variant="h5">{item.name}</Typography>
//   <Typography variant="h5">${item.unformated_price/100}</Typography>
// </div>
// </CardContent>
// <CardActions className={classes.cardActions}>
//   <div className={classes.buttons}>
//     <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, 1)}>-</Button>
//     <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
//     <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, 1)}>+</Button>
//   </div>
//   <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
// </CardActions>
// </Card>