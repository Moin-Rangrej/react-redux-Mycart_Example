import { useDispatch,useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";


const  CartButton = (props) => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const dispatch = useDispatch()  
  const toggleHandler = () => {
    dispatch(uiActions.toggle())
  }
  return (
    <button className='button' onClick={toggleHandler}>
      <span>Mycart</span>
      <span className='badge'>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
