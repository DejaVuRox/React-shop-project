import React, {Component} from 'react'
import Link from 'react-router-dom/Link';
import Button from "@material-ui/core/Button";
import './Form.css'


class form extends Component{
    state = {
        name:'',
        email: ''
    }

    nameHandler = (name) =>{
        this.setState({name: name.target.value})
    }
    emailHandler = (email) =>{
        this.setState({email: email.target.value})
    }

render() {
    console.log(this.state.name)
    console.log(this.state.email)
 return (
   <div className="Form">
     <form>
       Email:{" "}
       <input
         type="email"
         placeholder="Enter email"
         value={this.state.email}
         onChange={this.emailHandler}
         required
       />
       <br />
       Name:{" "}
       <input
         type="text"
         placeholder="Name"
         value={this.state.name}
         onChange={this.nameHandler}
         required
       />
       <br />
       <button
         variant="contained"
         color="default"
         component={Link}
         to="checkout"
         type="submit"
       >
         Continue To Checkout
       </button>
     </form>
   </div>
 );
    }
   
}

export default form

 


