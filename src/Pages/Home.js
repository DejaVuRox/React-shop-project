import React, { Component } from 'react'
import CartBuilder from '../Containers/CartBuilder'
import Form from '../Components/Form/Form'

export default class Home extends Component {
    render() {
        return (
          <div>
            <CartBuilder />
          </div>
        );
    }
}
