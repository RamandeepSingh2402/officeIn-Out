import { React, useState, Component } from 'react'
import { Container } from 'reactstrap';
import { CssBaseline } from '@mui/material';
import { Box } from '@mui/system';
import { Avatar } from 'material-ui';
import {Button} from '@mui/material';
import {Checkbox} from '@mui/material';
import TextField from 'material-ui/TextField';
import {FormControlLabel} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from 'material-ui/IconButton';

class Signup extends Component{

  render(){
  const pageRedirect = () => {
    window.location.replace("http://localhost:3000/signup");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      emailId: data.get('email'),
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
    });
    fetch('',{
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
      .then(json =>{
        pageRedirect(json["id"])
      }))
      .catch(error => {
        console.log("Invalid user");
      })
  };

    return(
      <ThemeProvider theme={ ThemeProvider }>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
          sx = {{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >

            <Avatar sx={{m:1, bgcolor: 'secondary.main'}}>
              <IconButton />
            </Avatar>
            <Box component="form" className="loginBox" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
      </ThemeProvider>
    );
}
}

export default Signup;
