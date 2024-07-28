import React, { useRef, useState } from 'react';
import { Box, TextField, InputAdornment, Button, Avatar, Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../feature/user/UserSlice';

const linearGradient = 'linear-gradient(to right, #f569a3, #f79ed1)';

export default function Login() {
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState({ name: false, password: false });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = nameRef.current.value;
    const password = passwordRef.current.value;

    if (username && password) {
      setError({ name: false, password: false });

      if (username === 'dharsha' && password === '1234') {
        dispatch(login(username));
        navigate('/user');
      } else if (username === 'admin' && password === 'admin123') {
        dispatch(login(username));
        navigate('/admin');
      } else {
        setError({ name: true, password: true });
      }
    } else {
      if (!username) setError((prev) => ({ ...prev, name: true }));
      if (!password) setError((prev) => ({ ...prev, password: true }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        maxWidth={600}
        minWidth={400}
        alignItems="center"
        justifyContent="center"
        margin="auto"
        marginTop={5}
        padding={3}
        borderRadius={5}
        boxShadow="5px 5px 10px #ccc"
        sx={{
          ":hover": {
            boxShadow: "10px 10px 20px #ccc",
          },
          backgroundImage: linearGradient,
          alignItems: "center",
          color: "black",
        }}
      >
        <Avatar id="avatar">
          <LockRoundedIcon />
        </Avatar>
        <Typography variant="h4" padding={3} textAlign="center">
          Login
        </Typography>
        <Box>
          <TextField
            id="input-with-icon-textfield"
            label="Username"
            inputRef={nameRef}
            variant="outlined"
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            error={error.name}
            helperText={error.name ? 'Fill the name' : ''}
          />
        </Box>
        <Box>
          <TextField
            id="password-with-icon-textfield"
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            inputRef={passwordRef}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PasswordIcon />
                </InputAdornment>
              ),
            }}
            error={error.password}
            helperText={error.password ? 'Fill the password' : ''}
          />
        </Box>
        <Button
          sx={{ marginTop: 3, borderRadius: 3, backgroundColor: "#d6067c", ":hover": { backgroundColor: "#ed5192" } }}
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
        <Typography variant="body1" component="span" style={{ marginTop: "10px" }}>
          Not registered yet?{" "}
          <span style={{ color: "#d6067c", cursor: "pointer" }} onClick={() => navigate("/register")}>
            Register
          </span>
        </Typography>
      </Box>
    </form>
  );
}


// import React, { useRef, useState } from 'react';
// import { Box, TextField, InputAdornment, Button, Avatar, Typography } from '@mui/material';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import PasswordIcon from '@mui/icons-material/Password';
// import LockRoundedIcon from '@mui/icons-material/LockRounded';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { login } from '../feature/user/UserSlice';

// const linearGradient = 'linear-gradient(to right, #f569a3, #f79ed1)';

// export default function Login() {
//   const nameRef = useRef(null);
//   const passwordRef = useRef(null);
//   const [error, setError] = useState({ name: false, password: false });
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (nameRef.current.value && passwordRef.current.value) {
//       setError({ name: false, password: false });
//       dispatch(login(nameRef.current.value));
//       navigate('/');
//     } else {
//       if (!nameRef.current.value) setError((prev) => ({ ...prev, name: true }));
//       if (!passwordRef.current.value) setError((prev) => ({ ...prev, password: true }));
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <Box
//         display="flex"
//         flexDirection="column"
//         maxWidth={600}
//         minWidth={400}
//         alignItems="center"
//         justifyContent="center"
//         margin="auto"
//         marginTop={5}
//         padding={3}
//         borderRadius={5}
//         boxShadow="5px 5px 10px #ccc"
//         sx={{
//           ":hover": {
//             boxShadow: "10px 10px 20px #ccc",
//           },
//           backgroundImage: linearGradient,
//           alignItems: "center",
//           color: "black",
//         }}
//       >
//         <Avatar id="avatar">
//           <LockRoundedIcon />
//         </Avatar>
//         <Typography variant="h4" padding={3} textAlign="center">
//           Login
//         </Typography>
//         <Box>
//           <TextField
//             id="input-with-icon-textfield"
//             label="Username"
//             inputRef={nameRef}
//             variant="outlined"
//             margin="normal"
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <AccountCircle />
//                 </InputAdornment>
//               ),
//             }}
//             error={error.name}
//             helperText={error.name ? 'Fill the name' : ''}
//           />
//         </Box>
//         <Box>
//           <TextField
//             id="password-with-icon-textfield"
//             label="Password"
//             type="password"
//             variant="outlined"
//             margin="normal"
//             inputRef={passwordRef}
//             fullWidth
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <PasswordIcon />
//                 </InputAdornment>
//               ),
//             }}
//             error={error.password}
//             helperText={error.password ? 'Fill the password' : ''}
//           />
//         </Box>
//         <Button
//           sx={{ marginTop: 3, borderRadius: 3, backgroundColor: "#d6067c", ":hover": { backgroundColor: "#ed5192" } }}
//           variant="contained"
//           type="submit"
//         >
//           Submit
//         </Button>
//         <Typography variant="body1" component="span" style={{ marginTop: "10px" }}>
//           Not registered yet?{" "}
//           <span style={{ color: "#d6067c", cursor: "pointer" }} onClick={() => navigate("/register")}>
//             Register
//           </span>
//         </Typography>
//       </Box>
//     </form>
//   );
// }

