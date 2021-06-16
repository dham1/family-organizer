import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { clearCart } from '../../redux/cart/cart.actions';
// import { addOrder } from '../../redux/settings/settings.actions';

import { connect, useStore } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

const StripeCheckoutButton = ({ price }) => {



  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IxwMYECtLLzpHI6y9PkOWKaPNplO3AUAQfpCLkVr4uJcZBHWHHAv59QGMstMeh6m0x5uhBA7PXaQuWkPZEXfMwT00PYOoOMEK';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {

      // const order = [{ amount: cartTotal }, { status: "success" }, { receipt: response.data.success.receipt_url }, { email: response.data.email }];
      // addOrder(order);

      // console.log(cartTotal);
      // console.log(response);
      // dau la comanda response.data.success.amount sau cartTotal e mai bine;  response.data.success.receipt_url; reponse.data.email
      // clearCart();
      alert('Payment successful');
      window.location.replace("/");


    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert('There was an issue for your payment. Please make sure you use the provided credit card');
    });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Plantify Life'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems,
//   cartTotal: selectCartTotal
// });

// const mapDispatchToProps = dispatch => ({
//   clearCart: dispatch(clearCart()),
// });
export default StripeCheckoutButton;
