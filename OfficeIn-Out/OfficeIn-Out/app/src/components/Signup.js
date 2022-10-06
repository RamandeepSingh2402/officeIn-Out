import { React, useState, Component } from 'react'
import { HTSReactForm } from 'hts-react-form'

class Signup extends Component{
  render(){
    return(
      <>
       <form>
          <label>
            First Name:
          </label>
          <input placeholder='First Name' type="text" firstName= "First Name" />
          <label>
          Last Name: 
          </label>
          <input placeholder='Last Name' type="text" lastName= "Last Name" />
          <label>
          Email Id:
          </label>
          <input placeholder='Email Id' type="text" emailId= "Email Id" />
        </form>
        <button> Sign-up </button>
        <button> Clear </button>
      </>
    );
  }
}
  export default Signup;