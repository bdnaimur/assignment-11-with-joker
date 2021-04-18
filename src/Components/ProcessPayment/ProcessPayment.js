import React from 'react';

// import {CardElement} from '@stripe/react-stripe-js';
import {Elements, CardElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('sk_test_51IhSaYHQJqYBzHzYF6yjqEYub1RUJh0zhcKPtDfEtLrphcRdnIihT8cLXcpFQUN9KPrst3suDbfWatbTP5lzz4Hs00oBl0XnOJ');
const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <CardElement
                options={{
                    style: {
                    base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                        color: '#aab7c4',
                        },
                    },
                    invalid: {
                        color: '#9e2146',
                    },
                    },
                }}
                />
        </Elements>
    );
};

export default ProcessPayment;