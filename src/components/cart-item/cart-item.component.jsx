import React from 'react';
import CustomButton from '../cutom-button/custom-button.component';
import { connect } from 'react-redux';

import { clearItemFromCart } from '../../redux/cart/cart.actions';
import './cart-item.styles.scss';

const CartItem = ({ item, clearItem }) => {
    const { title, dueDate, reporter, category } = item;
    return (
        <div className='cart-item'>
            <div className='item-details'>
                <span className='title'>{title}</span>
                <span className='duedate'>{dueDate}</span>
                <span className='reporter'>{reporter}</span>
                <button onClick={() => clearItem(item)}>Close task</button>
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item))
});
export default connect(null, mapDispatchToProps)(CartItem);

//categoria o adaug mai atrziu probabil cu culoare