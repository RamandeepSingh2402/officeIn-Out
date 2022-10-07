import { CssBaseline } from '@mui/material';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import EmployeeSelection from '../EmployeeSelection/EmployeeSelection';
import "./Signup.css";


export default function Signup(){

  const pageRedirect = (emailId) => {
    window.location.replace("http://localhost:3000/employee?=" +  emailId);
    // EmployeeSelection(emailId);
    <EmployeeSelection emailId = {emailId} />
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      emailId: data.get('email'),
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
    });
    fetch('http://localhost:9001/signup',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: data.get('firstName'),
        lastName: data.get('lastName'),
        emailId: data.get('emailId'),
        workingLocation: data.get('workingLocation')
      })
    }).then(response =>
      response.json()
      .then(json => {
        pageRedirect(json["emailId"])
      }))
      .catch(error => {
        console.log("Invalid user");
      })
  };

    return(
      <>
      <h1>Kindly signup for today!</h1>
      <div className='classNameForm'>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
          sx = {{

              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box component="form" className="loginBox" onSubmit={handleSubmit} noValidate >
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="firstName"
              autoFocus
              className="firstName"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="lastName"
              label="Last Name"
              className='lastName'
              id="lastName"
            />
           <TextField
              margin="normal"
              required
              fullWidth
              id="emailId"
              label="Email Address"
              name="emailId"
              autoComplete="email"
              autoFocus
              className="emailId"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="workingLocation"
              label="Working Location"
              name="workingLocation"
              autoComplete="Office, Remote"
              autoFocus
              className="workingLocation"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            </Box>
          </Box>
        </Container>
        </div>
        </>  
    );
}
