import React from "react";
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";

// const {PUBLISHABLE_KEY, SECRET_KEY} = process.env
const {REACT_APP_STRIPE_PUBLIC} = process.env

const PopCheckout = (props) => {


  const onToken = token => {
    const body = {
      amount: 1099,
      token: token,
      billingName: props.billingName,
      billingAddress: props.billingAddress,
      billingCity: props.billingCity,
      billingState: props.billingState,
      billingZipcode: props.billingZipcode,
    };
    axios
      .post(`/checkout/${props.art_id}`, body)
      .then(response => {
        console.log(response);
        alert("Payment Success");
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  }

      return (
        <div>
          <StripeCheckout 
            token={onToken} 
            stripeKey={REACT_APP_STRIPE_PUBLIC} 
            amount={1000} />    
        </div>
      )
  }

export default PopCheckout;