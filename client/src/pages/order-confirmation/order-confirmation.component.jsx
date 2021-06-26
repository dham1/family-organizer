import React from 'react';
import { OrderConirmationContainer } from './order-confirmation.styles';
const OrderConfirmation = (props) => (
    <OrderConirmationContainer>
        <h1>We received your order <b>{props.location.state.orderNumber}</b></h1>
        <h2>You can check your receipt by clicking <a style={{ color: 'blue' }} href={props.location.state.receipt}>here</a></h2>
        <h3>Check your email to see your order details and don't hesitate to contact us.</h3>
    </OrderConirmationContainer>
);

export default OrderConfirmation