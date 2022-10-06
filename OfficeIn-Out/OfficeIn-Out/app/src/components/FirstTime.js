import { React, Component } from "react";
import { NavLink, useNavigate } from "react-router-dom";

class FirstTime extends Component{
    // const navigate = useNavigate();
    // const navigateToSignup = () => {
    //     navigate('./signup');
    // }

    render(){
    return(
        <>
            <h1>
                Welcome to Employee Check-in.
            </h1>
            <h2>
                We're more than happy to announce this new tool!
            </h2>
            <p>
                First time here?
            </p>
            {/* <button onClick={navigateToSignup}>
                Don't forget to signup.
            </button> */}
            
        </>
    );
}
}

export default FirstTime;