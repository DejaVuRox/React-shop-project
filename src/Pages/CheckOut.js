import React, { Component } from 'react'
import './about.css'
import CheckoutSummary from '../Components/CheckoutSummary/CheckoutSummary'

export default class CheckOut extends Component {
    state = {
        cars: {
            Ferrari: 1,
            Porsche: 1,
            Bugatti: 1,
            Maserati: 1,
            BMW: 1,
            Mazda: 1
        }
    }
    render() {
        return (
          <div>
            <CheckoutSummary cars={this.state.cars} />
          </div>
        );
    }
}

