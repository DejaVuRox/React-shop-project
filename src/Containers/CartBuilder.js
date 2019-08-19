import React, {Component} from 'react'
import Car from '../Components/Cars/Car'
import cars from '../json/cars'
import './CartBuilder.css'
import Navbar from '../Components/Navbar/Navbar'
import Form from '../Components/Form/Form'

const CAR_PRICES = {
  Ferrari: 1000000,
  Porsche: 1200000,
  Bugatti: 3200000,
  Maserati: 80000,
  BMW: 120000,
  Mazda: 10000
};

class CartBuilder extends Component {
  state = {
    cars:[],
    carsPurchase: [],
    total: 0,
    purchased: 0
  };

componentDidMount(){
  this.setState({cars:cars})
}
    getItem = id =>{
      const product = this.state.cars.find(item => item.id === id)
      return product
    }


    addingCarHandler = id => {
    const oldCars = {...this.state.cars}
    

    // const updatedCarsPurchase = oldCars + 1;

    const oldPurchasedTotal = this.state.purchased
    const updatedPurchasedTotal = oldPurchasedTotal +1

    const updatedPurchase = { ...this.state.carsPurchase };
    updatedPurchase[id] =  this.state.cars.filter( car => car.id === id )
    .map(carKey => {return {...Array(carKey)}})


    const priceAddition = CAR_PRICES[id];
    const oldTotal = this.state.total;
    const newPrice = oldTotal + priceAddition;
   
    this.setState({ total: newPrice,
                    carsPurchase: updatedPurchase,
                    purchased: updatedPurchasedTotal
                    });
  };

  removingCarHandler = name => {
    const oldCarsPurchase = this.state.total
    if (oldCarsPurchase <= 0) {
      return;
    }
    const updatedCarsPurchase = oldCarsPurchase - 1;

    const updatedPurchase = { ...this.state.carsPurchase };
    const oldPurchasedTotal = this.state.purchased;

    const updatedPurchasedTotal = oldPurchasedTotal - 1;
    updatedPurchase[name] = updatedCarsPurchase;

    const priceAddition = CAR_PRICES[name];
    const oldTotal = this.state.total;
    const newPrice = oldTotal - priceAddition;

    this.setState({ total: newPrice, 
                    carsPurchase: updatedPurchase, 
                    purchased: updatedPurchasedTotal});
  };


  render() {
    console.log(`[cars data]:`,this.state.cars);
    console.log(`[cars purchased]:`,this.state.carsPurchase);
    console.log(`[cars quantity]:`,this.state.purchased);

    return (
      <div>
        <div className="container">
          <Navbar count={this.state.purchased} />
          <Car
            removeCar={this.removingCarHandler}
            addCar={this.addingCarHandler}
            car={cars}
          />
          <p className="total">TOTAL: {this.state.total}</p>
        </div>
        <Form/>
      </div>
    );
  }
}

export default CartBuilder
