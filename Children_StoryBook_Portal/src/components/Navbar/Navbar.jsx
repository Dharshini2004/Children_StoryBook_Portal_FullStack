import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  styled,
  InputBase,
  alpha,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector
import logo from "../../assets/logo.jpeg"; 
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DashboardIcon from '@mui/icons-material/Dashboard';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Login', path: '/login' },
  // { label: 'Register', path: '/register' },
];

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
}));

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const username = useSelector((state) => state.user.username); // Use useSelector to get username

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);
    if (value) {
      const filteredResults = data.filter(item => 
        item.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, fontSize: 15, fontFamily: "'Comic Sans MS', cursive, sans-serif", fontWeight: 700 }}>
        KID'S STORY WORLD
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} component={Link} to={item.path} style={{color:"black"}}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <AppBar component="nav">
          <Toolbar sx={{backgroundColor:"#d6067c"}}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <img src={logo} alt="logo" style={{ width: '100px', height: '100px', paddingRight: "10px" }}/>
            <div>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', justifyContent: "left", fontSize: 30, fontFamily: "'Comic Sans MS', cursive, sans-serif", fontWeight: 700 } }}
              >
                KID'S STORY WORLD
              </Typography>
            </div>
            <Box 
              display="flex"
              flexDirection="row"
              margin="auto"
              paddingLeft={10}          
              paddingRight={0}
              sx={{ display: { xs: 'none', sm: 'cover' } }}
            >
              <Box>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    value={query}
                    onChange={handleSearch}
                    sx={{ flex: 1, paddingLeft: '10px' }}
                  />
                </Search>
                
                <List>
                
                  {results.map((result, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={result} />
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Link to="/user">
              <IconButton>
                  <DashboardIcon style={{color:"white",marginLeft:"10px"
                  }} />
              </IconButton>
                </Link>
              {navItems.map((item) => (
                <Button key={item.label} sx={{ color: '#fff', fontFamily: "'Comic Sans MS', cursive, sans-serif", fontWeight: 700 }} component={Link} to={item.path}>
                  {item.label}
                </Button>
              ))}
              {username && (
                <Typography variant="h6" component="div" sx={{ color: 'white', marginLeft: 2 }}>
                  {username}!
                </Typography>
              )}
              
              <Link to="/cart">
              <IconButton>
                  <ShoppingCartIcon style={{color:"white",marginLeft:"10px"
                  }} onClick={() => navigate("/cart")}/>
              </IconButton>
                </Link>
            </Box> 
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
      <Outlet/>
    </>
  );
}

export default Navbar;
