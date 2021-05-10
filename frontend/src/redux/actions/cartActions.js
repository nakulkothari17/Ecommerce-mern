import * as actionTypes from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
 //const { data } = await axios.get(`/api/products/${id}`);
 
  
  const test = await fetch(`/api/products/${id}`);
  var datas  = await test.json();

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: datas._id,
      name: datas.name,
      imageUrl: datas.imageUrl,
      price: datas.price,
      countInStock: datas.countInStock,
      qty,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};


export const emptyTheCart = () => (dispatch, getState) => {
  console.log("im here\n");
  dispatch({
    type: actionTypes.DELETE_THE_CART,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};