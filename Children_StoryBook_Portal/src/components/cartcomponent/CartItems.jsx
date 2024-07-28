import React from 'react';
import { useDispatch } from 'react-redux';
import { increase, decrease, removeItem } from '../../feature/cart/CartSlice';
import { TableRow, TableCell, IconButton } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increase({ id }));
  };

  const handleDecrease = () => {
    if (amount === 1) {
      dispatch(removeItem(id));
      return;
    }
    dispatch(decrease({ id }));
  };

  const handleRemove = () => {
    dispatch(removeItem(id));
  };

  return (
    <TableRow>
      <TableCell>
        <img src={img} alt={title} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
      </TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>${price}</TableCell>
      <TableCell>
        <IconButton onClick={handleIncrease}>
          <KeyboardArrowUpIcon />
        </IconButton>
        {amount}
        <IconButton onClick={handleDecrease}>
          <KeyboardArrowDownIcon />
        </IconButton>
      </TableCell>
      <TableCell>${(price * amount).toFixed(2)}</TableCell>
      <TableCell>
        <IconButton onClick={handleRemove}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default CartItem;

// import {increase,decrease,removeItem} from '../../feature/cart/CartSlice';
// import { useDispatch } from 'react-redux';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// const CartItem = ({ id, img, title, price, amount }) => {
// const dispatch=useDispatch();
//   return (
//     <article className='cart-item'>
//       <img src={img} alt={title} />
//       <div>
//         <h4>{title}</h4>
//         <h4 className='item-price'>${price}</h4>
//         <button
//           className='remove-btn'
//           onClick={()=>{
//             dispatch(removeItem(id));
//           }}
//         >
//           remove
//         </button>
//       </div>
      
//       <div>
//         <button
//           className='amount-btn'
//           onClick={()=>{
//             dispatch(increase({id}));
//           }}
//         >
//           <KeyboardArrowUpIcon />
//         </button>
//         <p className='amount'>{amount}</p>
//         <button
//           className='amount-btn'
//           onClick={()=>{
//             if(amount===1){
//             dispatch(removeItem(id));
//             return;
//             }
//             dispatch(decrease({id}));
//           }}
//         >
//           <KeyboardArrowDownIcon />
//         </button>
//       </div>
//     </article>
//   );
// };
// export default CartItem;
