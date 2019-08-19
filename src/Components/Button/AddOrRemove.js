import React from 'react'
import Button from "@material-ui/core/Button";
import './Buttons.css'




const Add = (props) => {
    return (
      <div className='Buttons'>
        <Button
          onClick={props.added}
          variant="contained"
          color='primary'
        >Add</Button>
        <Button
          onClick={props.removed}
          variant="contained"
          color='secondary'
        >Remove</Button>
      </div>
    );
}

export default Add
