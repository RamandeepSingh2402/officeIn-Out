import * as React from "react";
import { useState } from "react";

function EmployeeSelection(props) {

    const [name, setName] = useState([]);

    const getEmployeeName = (emailId) => {
        if (!emailId) {return;}
        fetch("http://localhost:9001/employee/" + emailId, {
            method: "GET",
        }).then(response => response.json()
            .then(json => {
                setName(response);
            })
            .then(console.log({name}))).catch(error => { console.log(error); });
            
    };

    function printName ()  {
        return <section>
            {name}
        </section>
    }

    return (
        <>
        <h1>Greetings of the day my friend! {printName()}
            <br/>
            Your working location has been updated for the day!
            <br/>
            <br/>
            Take care and have a wonderful day ahead!
        </h1>
        
        </>
    );
    }
export default EmployeeSelection;