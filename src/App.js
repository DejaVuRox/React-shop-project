import React,{ Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar'
import home from './Pages/Home'
import about from './Pages/About'
import checkout from './Pages/CheckOut'

class App extends Component {

render(){
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="containerMain">
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/about" component={about} />
            <Route exact path="/checkout" component={checkout} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
 }
}

export default App;
