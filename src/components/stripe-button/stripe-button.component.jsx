import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceToStripe = price * 100;
    const publishableKey = 'pk_test_51IxwMYECtLLzpHI6y9PkOWKaPNplO3AUAQfpCLkVr4uJcZBHWHHAv59QGMstMeh6m0x5uhBA7PXaQuWkPZEXfMwT00PYOoOMEK';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='Platify Life'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceToStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;