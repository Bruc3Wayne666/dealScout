import React, {FC, useState} from 'react';
import {PayPalButtons} from "@paypal/react-paypal-js";


const PaypalCheckoutButton: FC<any> = ({product}) => {
    const [isPaid, setIsPaid] = useState(false)
    const [err, setErr] = useState<any>(null)

    const handleApprove = () => {
        setIsPaid(true)

        // send smth to backend and get response (upd status etc)
    }

    if (isPaid) alert('Successfully purchased!') // etc

    if (err) alert(err) //etc

    return <PayPalButtons
        style={{
            color: 'black',
            layout: 'vertical',
            height: 40,
            shape: 'pill'
        }}

        onClick={
            (data, actions) => {
                // validate
                const alreadyPurchased = false

                if (alreadyPurchased){
                    setErr('Already purchased.')

                    return actions.reject()
                } else {
                    return actions.resolve()
                }
            }
        }

        createOrder={
            (data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: product.description,
                            amount: {
                                value: product.price
                            }
                        }
                    ]
                })
            }
        }

        onApprove={
            async (data, actions) => {
                const order = await actions.order?.capture()
                console.log('order', order)

                handleApprove()
            }
        }

        onError={err => setErr(err)}
        onCancel={() => alert('You have canceled')} // etc
    />
};

export default PaypalCheckoutButton;
