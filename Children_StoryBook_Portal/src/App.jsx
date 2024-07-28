

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import Contact from './pages/Contact'
import Feedback from './pages/Feedback'
import Policy from './pages/Policy'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Carousalcomp from './components/Carouselcomp'
import PictureBooks from './pages/categories/PictureBook/PictureBooks'
import BookDetails from './components/BookDetails'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store } from './store'
import CartContainer from './components/cartcomponent/CartContainer'
import PaymentPage from './feature/payment/PaymentPage'
import AdminPanel from './components/dashboard/admin/AdminPanel'
import UserPanel from './components/dashboard/user/UserPanel'
import PaymentSuccess from './pages/PaymentSuccess'
// import PaymentForm from './feature/payment/PaymentForm'



function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
      {/* <Header/> */}
    <Routes>
    {/* <Route path="/" element={<PrivateRoute/>}> */}
         {/* <Route index element={<Home/>}/> */}
      {/* </Route> */}
      
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route index element={<Carousalcomp/>} />
          
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          < Route path="/feedback" element={<Feedback/>}/>
            <Route path="/policy" element={<Policy/>}/>
            <Route path="/picturebook" element={<PictureBooks/>}/>
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/cart" element={<CartContainer/>}/>
            <Route path="/paymentpage" element={<PaymentPage/>}/>
            <Route path="/admin" element={<AdminPanel/>}/>
            <Route path="/user" element={<UserPanel/>}/>
            
        </Route>
            <Route path="/success" element={<PaymentSuccess/>}/>

    </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
