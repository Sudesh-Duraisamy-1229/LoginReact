import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div className='sign-in'>
        <h1>SIGN IN</h1>
        <TextField id="standard-basic" label="Username" variant="standard" />
        <TextField id="standard-basic" label="Password" variant="standard" />
        <br/>
        <Button variant="text">Lets Go</Button>
    </div>
  )
}

export default Login