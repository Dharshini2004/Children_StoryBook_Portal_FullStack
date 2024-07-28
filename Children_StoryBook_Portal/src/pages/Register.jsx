import AccountCircle from '@mui/icons-material/AccountCircle'
import { Box, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import PasswordIcon from '@mui/icons-material/Password';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
const linearGradient = 'linear-gradient(to right, #f569a3, #f79ed1)';
function Register() {
    let name=useRef(null)
    let email=useRef(null)
    let password=useRef(null)
    const navigate = useNavigate();
    const[error,setError]=useState({name:false,email:false,password:false})
    const handleSubmit=(e)=>
        {
            e.preventDefault();
            console.log(name.current.value)           
            console.log(email.current.value)           
            console.log(password.current.value) 
            setError((prev)=>{
                return{...prev,name:false,email:false,password:false}
                
            })
            
            if(name.current.value && email.current.value && password.current.value)
                {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if(!emailRegex.test(email))
                        {
                            setError((prev)=>{
                                return{...prev,name:false,email:true,password:false};
                            })
                            console.log("Invalid Mail id")
                            alert("Invalid Email")
                        }
                    console.log(name.current.value)           
                    console.log(email.current.value)           
                    console.log(password.current.value) 
                }
                else{
                    console.log("please fill all field")
                    if(!name.current.value && !email.current.value && !password.current.value)
                        {
                            setError((prev)=>
                            {
                                return{...prev,name:true,email:true,password:true};
                            })
                        }
                        else if(!name.current.value)
                            {
                                setError((prev)=>{
                                    return{...prev,name:true};
                                })
                            }
                        else if(!email.current.value)
                            {
                                setError((prev)=>{
                                    return{...prev,email:true};
                                })
                            }
                        else if(!password.current.value)
                            {
                                setError((prev)=>{
                                    return{...prev,password:true};
                                })
                            }
                }
        }

  return (
    <form>
    <Box 
        display="flex"
        flexDirection={"column"}
        maxwidth={600}
        minWidth={400}
        alighitems="center"
        justifyContent={"center"}
        margin="auto"
        marginTop={6}
        padding={3}
        borderRadius={5}
        boxShadow={"5px 5px 10px #ccc"}
        backgroundColor="#bab9f0"

        sx={{
            ":hover":{
                boxShadow:"10px 10px 20px #ccc",
            },
            backgroundImage: linearGradient,
            alignItems:"center",
            color:"black"
        }}
    >
      <Typography variant="h4" padding={3} textAlign={"center"}>Register</Typography>
      <Box>
      <TextField
        id="input-with-icon-textfield"
        label="Username"
        variant="outlined"
         margin='normal'
        inputRef={name}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      /> 
      {error.name&&(<Typography color={"red"} fontSize={"8px"}>
        Fill the name
      </Typography>)}
      </Box>
      <Box>
      <TextField
        id="email-with-icon-textfield"
        label="Email"
        inputRef={email}
        variant="outlined"
         margin='normal'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
      /> 
      {error.email&&(<Typography color={"red"} fontSize={"8px"}>
    Fill the correct email
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
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PasswordIcon />
            </InputAdornment>
          ),
        }}
      />   
      {error.password&&(<Typography color={"red"} fontSize={"8px"}>
    Fill the password
    </Typography>)}    
    </Box>
      <Button sx={{marginTop:3,borderRadius:3,backgroundColor:"#d6067c",":hover":{backgroundColor:"#ed5192"}} }variant="contained" onClick={handleSubmit}> Submit</Button>
      <Typography
            variant="body1"
            component="span"
            style={{ marginTop: "10px" }}
          >
            already registerd?{" "}
            <span
              style={{ color: "#d6067c", cursor: "pointer" }}
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </span>
          </Typography>
    </Box>
    </form>
  )
}

export default Register