import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import { useRef } from 'react';
import Button from '@mui/material/Button';
import { Avatar, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import LockRoundedIcon from '@mui/icons-material/LockRounded';


export default function Login() {
  let name = useRef(null)
  let password = useRef(null)
  const [error, setError] = React.useState({ name: false, password: false });
  const navigate = useNavigate();
  // const handleSubmit=(e)=>{
  //   e.preventdefault();
  const handleSubmit = (event) => {
    event.preventDefault();
    // alert('Form submission prevented!');
    console.log(name.current.value)
    console.log(password.current.value)
    if (name.current.value && password.current.value) {
      setError((prev) => {
        return { ...prev, name: false, password: false }
      })
      console.log(name.current.value)
      console.log(password.current.value)

    }
    else {
      console.log("Please fill all field")
      if (!name.current.value && !password.current.value) {
        setError((prev) => {
          return { ...prev, name: true, password: true };
        })
      }
      else if (!name.current.value) {
        setError((prev) => {
          return { ...prev, name: true }
        })
      }
      else if (!password.current.value) {
        setError((prev) => {
          return { ...prev, password: true }
        })
      }


    }
  }

  return (
    <form >
      <Box
        display="flex"
        flexDirection={"column"}
        maxwidth={600}
        minWidth={400}
        alighitems="center"
        justifyContent={"center"}
        margin="auto"
        marginTop={5}
        padding={3}
        borderRadius={5}
        boxShadow={"5px 5px 10px #ccc"}
        backgroundColor="#bab9f0"

        sx={{
            ":hover":{
                boxShadow:"10px 10px 20px #ccc",
            },
            alignItems:"center",
            color:"black"
        }}
        >
        <Avatar id="avatar">
            <LockRoundedIcon/>
          </Avatar>
          <Typography  variant="h4" padding={3} textAlign={"center"}>
            Login
          </Typography>
        <Box>
          <TextField
            id="input-with-icon-textfield"
            label="Username"
            inputRef={name}
            variant="outlined"
            margin='normal'
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          {error.name && (<Typography color={"red"} fontSize={"8px"}>
            Fill the name
          </Typography>)}
        </Box>
        <Box>
          <TextField
            id="password-with-icon-textfield"
            label="Password"
            type='password'
            variant="outlined"
            margin='normal'
            inputRef={password}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PasswordIcon />
                </InputAdornment>
              ),
            }}
          />
          {error.password && (<Typography color={"red"} fontSize={"8px"}>
            Fill the password
          </Typography>)}
        </Box>
        <Button sx={{marginTop:3,borderRadius:3}}variant="contained" onClick={handleSubmit}> Submit</Button>
        <Typography
            variant="body1"
            component="span"
            style={{ marginTop: "10px" }}
          >
            Not registered yet?{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </span>
          </Typography>
      </Box>
    </form>
  );
}

