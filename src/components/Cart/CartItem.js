import {useDispatch} from 'react-redux'
import { cartActions } from '../../store/cart-slice'

const CartItem = (props) => {
  const dispatch = useDispatch()
  const { id ,title, quantity, total, price } = props.item;
  const removeItemfromcart = () => {
    dispatch(cartActions.removeToCart(id))
  }

  const addItemfromcart = () => {
    dispatch(cartActions.addItemToCart({id,title,price}))
  }

  return (
    <li className='item'>
      <header>
        <h3>{title}</h3>
        <div className='price'>
          ₹{total.toFixed(2)}
          <span className='itemprice'>(₹{price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className='details'>
        <div className='quantity'>
          x <span>{quantity}</span>
        </div>
        <div className='actions'>
          <button onClick={removeItemfromcart}>-</button>
          <button onClick={addItemfromcart}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
