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
import emailkey from '../../emailkey';
import emailjs from 'emailjs-com';
import { useHistory } from 'react-router-dom';

const StripeCheckoutButton = ({ price }) => {

  const history = useHistory();
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IxwMYECtLLzpHI6y9PkOWKaPNplO3AUAQfpCLkVr4uJcZBHWHHAv59QGMstMeh6m0x5uhBA7PXaQuWkPZEXfMwT00PYOoOMEK';
  const orderNumber = Math.floor(Math.random() * 1000000);

  const sendEmail = (name, orderNumber, receipt, amount) => {
    emailjs.send(`service_9rj21ne`, emailkey.ORDER_TEMPLATE_ID, {
      to_name: name,
      order_number: orderNumber,
      amount: amount,
      receipt_url: receipt,
      reply_to: "dianahamzea3@gmail.com"
    }, emailkey.USER_ID)
      .then((result) => {
        console.log(result.text);
      },
        (error) => {
          alert("An error occurred, Please try again", error.text);
        });

  };

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

      console.log(response);
      sendEmail(response.data.success.billing_details.name, orderNumber, response.data.success.receipt_url, price);

      history.push({
        pathname: '/checkout/order',
        state: { orderNumber: orderNumber, receipt: response.data.success.receipt_url }
      });


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
