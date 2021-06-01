import React from 'react';
import CustomButton from '../cutom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import './task-item.styles.scss';
const TaskItem = ({ item, addItem }) => {
    const { title, asignee, reporter, dueDate, inCart } = item;
    return (
        <div className="task-item">
            <div className="title">{title}</div>
            <div className="asignee">{asignee}</div>
            <div className="reporter">{reporter}</div>
            <div className="duedate">{dueDate}</div>
            {
                inCart
                    ? <CustomButton >Added to list</CustomButton>
                    : <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
            }
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(TaskItem);