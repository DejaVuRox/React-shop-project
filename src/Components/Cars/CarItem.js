import React from "react";
import { withRouter } from 'react-router-dom'

const CarItem = ({cars}) => {
  return (
    <div>
          <h4>name:{cars.name}</h4>
          <img src={cars.img} alt=''/>
          <p>Description: {cars.description}</p>
          <p>Price: {cars.price}</p>
    </div>
  );
};

export default withRouter(CarItem);
