import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart, removeItemToCart, clearItemFromCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import './checkout-item.styles.scss';

const CheckOutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem))

    const addItemToHandler = () => dispatch(addItemToCart(cartItems, cartItem))
    const removeItemToHandler = () => dispatch(removeItemToCart(cartItems, cartItem))

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name} </span>
            <div className='quantity'>
                <div className='arrow' onClick={removeItemToHandler}>
                    &#10094;
                </div>
                <span className='value'>{quantity} </span>
                <div className='arrow' onClick={addItemToHandler}>
                    &#10095;
                </div>
            </div>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
        </div>
    );
}

export default CheckOutItem;