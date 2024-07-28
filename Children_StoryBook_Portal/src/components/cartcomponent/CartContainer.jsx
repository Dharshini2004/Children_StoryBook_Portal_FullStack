import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals, clearCart } from '../../feature/cart/CartSlice';
import CartItem from '../../components/cartcomponent/CartItems';
import {
  Box,
  Typography,
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CartContainer = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
//   const {cartItems,isLoding}=useSelector((store)=>store.cart);
const { cartItems, total, amount } = useSelector((store) => store.cart);

useEffect(()=>{
  dispatch(calculateTotals());
},[cartItems]);


  if (amount < 1) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Box textAlign="center">
          <Typography variant="h4" gutterBottom>
            Your Bag
          </Typography>
          <Typography variant="body1" color="textSecondary">
            is currently empty
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box textAlign="center" mb={2}>
        <Typography variant="h4">
          Your Bag
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label="cart table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell></TableCell>
              <TableCell align="right" sx={{marginLeft:"200px"}}>Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
        <Typography variant="h6">
          Total: <span>$ {total.toFixed(2)}</span>
        </Typography>
        <Button 
          variant="contained" 
          sx={{backgroundColor:"#d6067c" }}
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </Button>
        <Button 
          variant="contained" 
          sx={{backgroundColor:"#d6067c" }}
          onClick={() => navigate("/paymentpage")}
        >
          Checkout
        </Button>
      </Box>
    </Container>
  );
};

export default CartContainer;


// import CartItem from '../../components/cartcomponent/CartItems';
// import cartItems from '../../CartItems'; 
// import { useDispatch,useSelector } from 'react-redux';
// import { clearCart } from '../../feature/cart/CartSlice';
// const CartContainer = () => {


//   const dispatch=useDispatch();
//   const{cartItems,total,amount}=useSelector((store)=>store.cart);
//   if (amount < 1) {
//     return (
//       <section className='cart'>
//         <header>
//           <h2>your bag</h2>
//           <h4 className='empty-cart'>is currently empty</h4>
//         </header>
//       </section>
//     );
//   }

//   return (
//     <section className='cart'>
//       <header>
//         <h2>your bag</h2>
//       </header>
//       <div>
//         {cartItems.map((item) => {
//           return <CartItem key={item.id} {...item} />;
//         })}
//       </div>
//       <footer>
//         <hr />
//         <div className='cart-total'>
//           <h4>
//             total <span>$ {total.toFixed(2)}</span>
//           </h4>
//         </div>
//         <button className='btn clear-btn'
//         onClick={()=>{
//           dispatch(clearCart());
//         }}
//         >
//           clear cart
//         </button>
//       </footer>
//     </section>
//   );
// };
// export default CartContainer;
