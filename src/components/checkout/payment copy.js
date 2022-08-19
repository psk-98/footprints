import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js"
import { placeOrder } from '../../actions/checkout'
import { CHECKOUT_SUCCESS, PLACING_ORDER } from '../../actions/types'
import { Redirect } from 'react-router-dom'

const Payment = (props) => {
    const [shipDetails] = useState(props.shipDetails)
    const stripe = useStripe()
    const elements = useElements()
    const cart = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const card = elements.getElement(CardElement)

        const {paymentMethod, error} = await stripe.createPaymentMethod({
            type: 'card',
            card: card
        })
        console.log(cart)
        const payment_method_id = paymentMethod.id
        placeOrder(shipDetails, payment_method_id, cart)
        console.log(shipDetails)
        return <Redirect to='/' />
    }
    

    return (
        <form onSubmit={handleSubmit} >
            <div className='card'>
                <div className='card-text'>
                    <CardElement/>
                </div>
                <div>
                    <button>Pay</button>
                </div>
            </div>
        </form>
    )

}

export default Payment