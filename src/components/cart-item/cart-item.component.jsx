import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: { title, dueDate, reporter, category } }) => (
    <div className='cart-item'>
        <div className='item-details'>
            <span className='title'>{title}</span>
            <span className='duedate'>{dueDate}</span>
            <span className='reporter'>{reporter}</span>
        </div>
    </div>
);

export default CartItem;

//categoria o adaug mai atrziu probabil cu culoare