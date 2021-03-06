import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, Typography} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import logo from '../../assets/creoate-cropped-final-logo-black-2.png'
import useStyles from './styles'
import { Link } from 'react-router-dom'

const Navbar = ({cartSize}) => {
    const classes = useStyles()
    console.log('Cart size = ' + cartSize)
    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography component={Link} to='/'variant='h6' className={classes.title} color='inherit'>
                        <img src={logo} alt="Commerce" height="25px" className={classes.image}/>
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton component={Link}  to='/cart' aria-label='Show cart items' color='inherit'>
                            <Badge badgeContent={cartSize} color='secondary'>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>   
        </>
    )
}

export default Navbar
