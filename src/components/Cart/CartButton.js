import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";


const  CartButton = (props) => {
  const dispatch = useDispatch()  
  const toggleHandler = () => {
    dispatch(uiActions.toggle())
  }
  return (
    <button className='button' onClick={toggleHandler}>
      <span>from Mycart</span>
      <span className='badge'>1</span>
    </button>
  );
};

export default CartButton;
