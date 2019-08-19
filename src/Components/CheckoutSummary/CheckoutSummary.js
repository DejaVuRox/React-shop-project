import React from 'react'
import CarItem from '../Cars/CarItem'
import Button from '@material-ui/core/Button'
import './CheckoutSummary.css'


const CheckoutSummary = (props) => {
    return (
        <div className='CheckoutSummary'>
            <div style={{width:'300px', height:'300px', margin:'auto'}}>
                <CarItem cars={props.cars}/>
            </div>
        <Button
          variant="contained"
          color='primary'
          clicked
        >Continue</Button>
        <Button
          variant="contained"
          color='secondary'
          clicked
        >Cancel</Button>
        </div>
    )
}

export default CheckoutSummary
