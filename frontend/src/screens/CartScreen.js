import "./CartScreen.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Components
import CartItem from "../components/CartItem";
import Paypal from "../components/Paypal";
// Actions
import { addToCart, removeFromCart, emptyTheCart } from "../redux/actions/cartActions";
import axios from "axios";

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;


  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const emptyCart = () => {
    dispatch(emptyTheCart());
  }
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  const transactionSuccess = (data) => {
      let variables = {
        cartdetails: cartItems, paymentData: data
      }

      console.log(JSON.stringify(variables));
      
      // axios.post('/api/products/order', variables).then(response => 
      //   {
           
      //   }
      // )
      fetch('/api/products/order', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        'body': JSON.stringify(variables),
      })
      //console.log("im in post");
      emptyCart();
      
  }
  const transactionError = () => {

  }

  const transactionCanceleld = () => {

  }

  const handleSubmit = async (event) => {
    event.preventDefault();
  }
  return (
    <>
      <div className="cartscreen">
        <div className="cartscreen__left">
          <h2>Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
        </div>

        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubTotal()}</p>
          </div>
          <div >
            <Paypal toPay={getCartSubTotal()}
            onSuccess={transactionSuccess}
            transactionError ={transactionError}
            transactionCanceleld={transactionCanceleld} onSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartScreen;
