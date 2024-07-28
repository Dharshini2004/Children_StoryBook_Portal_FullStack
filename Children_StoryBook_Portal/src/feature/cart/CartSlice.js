import {createSlice} from '@reduxjs/toolkit'
import cartItems from "../../CartItems"

const initialState={
    cartItems:cartItems,
    amount:4,
    total:0,
    isLoading:true,
}

const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers:{
    addToCart: (state, action) => {
        state.push(action.payload);
      },
      increase:(state,{payload})=>{
        const cartItem=state.cartItems.find((item)=>item.id===payload.id);
        cartItem.amount=cartItem.amount+1;
      },
      decrease:(state,{payload})=>{
        const cartItem=state.cartItems.find((item)=>item.id===payload.id);
        cartItem.amount=cartItem.amount-1;
      },
      clearCart:(state)=>{
        state.cartItems=[];
      },
      removeItem:(state,action)=>{
        const itemId=action.payload;
        state.cartItems=state.cartItems.filter(item=>item.id!==itemId);
      },
      calculateTotals:(state)=>{
        let amount=0;
        let total=0;
        state.cartItems.forEach((item)=>{
          amount+=item.amount;
          total+=item.amount*item.price;
        });
        state.amount=amount;
        state.total=total;
      }


  },
});

export const {increase}=cartSlice.actions;
export const {decrease}=cartSlice.actions;
export const {clearCart}=cartSlice.actions;
export const {removeItem}=cartSlice.actions;
export const {calculateTotals,addToCart}=cartSlice.actions;
//action:when click it will triger

export default cartSlice.reducer;