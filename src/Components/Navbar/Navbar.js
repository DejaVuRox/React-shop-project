import React, { Component } from 'react'
import Link from 'react-router-dom/Link'
import './Navbar.css'
import cart from '../assets/cart3.png'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

class Navbar extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar>
          <h1 className="header-text">Car Store</h1>
          <div className="nav-btn">
            <Button component={Link} to="/" color="inherit">
              Home
            </Button>
            <Button component={Link} to="/about" color="inherit">
              About
            </Button>
            <Button component={Link} to="checkout" color="inherit">
              <img className="cart" src={cart} />
              <p className="cartCounter">{this.props.count}</p>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar
