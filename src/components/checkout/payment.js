import React, {Component} from 'react'
import {CardElement, ElementsConsumer} from "@stripe/react-stripe-js"

class Payment extends Component {

    handleChange = (e) => this.setState({[e.target.name]: e.target.value})

    handleSubmit = async e => {
        e.preventDefault()

        const {stripe, elements, shipDetails, placeOrder} = this.props
        console.log(shipDetails)
        if (!stripe || !elements) 
        {
            return
        }

        const card = elements.getElement(CardElement)
        const result = await stripe.createPaymentMethod({
            type: 'card',
            card: card
        })
        const payment_method_id = result.paymentMethod.id
        console.log(result.paymentMethod.id)
        placeOrder(shipDetails, payment_method_id)
    }    

    render () {
        return (
            <>
                <div className='payment-desc'>
                    Use 4242 4242 4242 4242 for card number, any future date and any number for zipcode
                </div>
                <form onSubmit={this.handleSubmit} >
                    <div className='card'>
                        <div className='card-text'>
                            <CardElement/>
                        </div>
                        <div>
                            <button>Pay</button>
                        </div>
                    </div>
                </form>
            </>
        )
    }
}

export default  function InjectedCheckoutForm(props) {
        return (
            <ElementsConsumer>
                {({ stripe, elements }) => (

                    <Payment stripe={stripe} elements={elements} shipDetails={props.shipDetails} placeOrder={props.placeOrder}/>
                )}
            </ElementsConsumer>
        );
    }