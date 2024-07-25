
import './App.css'
import Login from './pages/Login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/Login/Register'
// import PrivateRoute from './components/privateroute/PrivateRoute'
import Home from './pages/home/Home'
// import Header from './components/Header'
// import Footer from './components/Footer'
function App() {

  return (
    <BrowserRouter>
      {/* <Header/> */}
    <Routes>
    {/* <Route path="/" element={<PrivateRoute/>}> */}
         {/* <Route index element={<Home/>}/> */}
      {/* </Route> */}
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default App
