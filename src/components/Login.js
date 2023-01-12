import React, { useState } from 'react';
import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import PWDRequisite from './PWDRequisite';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const capsCheck = /^(?=.*?[A-Z]).*$/
const numberCheck = /^(?=.*?[0-9]).*$/
const specialCheck = /^(?=.*?[@#$%^*]).*$/
const lengthCheck = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/

const userNameCheck = /^[A-Z][a-z]{4,20}$/
 
function Login ()  {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showpassword, setShowPassword] = useState(false)

  const handleOnChange = (e)=>{
    setPassword(e.target.value);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <form>
      { 
      <div className='sign-in'>
          <h1 style={{color : "white"}}>SIGN IN</h1>
          <div style={{display : "flex" , alignItems : "center" , marginLeft : "29%"}}>
            <AccountCircle style={{paddingTop : "20px" , paddingRight : "10px", color : "rgb(44, 11, 213)"}}/>
            <TextField id="input-with-sx" label="Username " variant="standard" value={username} onChange={(e) => setUsername(e.target.value)}/>
          </div>
          <br/>
          <div style={{display : "flex" ,alignItems : "center",  marginLeft : "29%"}}>
          <PasswordIcon style={{paddingTop : "20px" , paddingRight : "10px", color : "rgb(44, 11, 213)"}}/>
          <FormControl  variant="standard">
          <InputLabel htmlFor="input-with-sx">Password</InputLabel>
          <Input
            value={password} 
            onChange={handleOnChange}
            id="input-with-sx"
            type={showpassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment>
                <IconButton style={{color:'rgba(59, 29, 207, 0.486)'}}
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showpassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }            
          />
           </FormControl>
           </div>
          <PWDRequisite 
            capsCheck = {capsCheck.test(password)} 
            NumberCheck = {numberCheck.test(password)}
            MinCheck = {lengthCheck.test(password)}
            MaxCheck = {lengthCheck.test(password)}
            SpecialCheck = {specialCheck.test(password)}
          />
          <br/>
          
            <Button className='loginButton' variant="text">
              {
               !(userNameCheck.test(username))  || !(lengthCheck.test(password))? <p>Lets Go</p> : 
               <Link to="/dashboard" className='link' state={{ username: username , password : password}}> Lets Go</Link>
              }
            </Button>
          
      </div>
      }
    </form>
  )
}

export default Login