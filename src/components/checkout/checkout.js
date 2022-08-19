import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Loader from '../common/loader'
import { Redirect } from 'react-router-dom'
import { placeOrder } from '../../actions/checkout'
import Payment from './payment'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from "@stripe/stripe-js/pure";
import "react-credit-cards/es/styles-compiled.css";



class Checkout extends Component {

    static propTypes = {
        accounts: PropTypes.object.isRequired,
        checkout: PropTypes.object.isRequired,
        placeOrder: PropTypes.func.isRequired
    }

    state = {
        isCard: false,
        alertStatus: false,
        name: '',
        surname: '',
        cName: '',
        email: '',
        phone: '',
        address: '',
        postal: '',
        city: '',
        country: '',
    }

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value})

    handleSubmit = (e) => {
        e.preventDefault();
        const { name,
                surname,
                cName,
                email,
                phone,
                address,
                city,
                country,
                postal   } = this.state
        
        if(name === '' || name === null) this.setState({alertStatus: true})
        if(surname === '' || surname === null) this.setState({alertStatus: true})
        if(email === '' || email === null) this.setState({alertStatus: true})
        if(phone === '' || phone === null) this.setState({alertStatus: true})
        if(address === '' || address === null) this.setState({alertStatus: true})
        if(city === '' || city === null) this.setState({alertStatus: true})
        if(country === '' || country === null) this.setState({alertStatus: true})
        if(postal === '' || postal === null) this.setState({alertStatus: true})

        this.setState({isCard: true})
    }

    componentDidMount() {

        console.log(this.props.checkout)
        const {isAuthenticated, user} = this.props.accounts
        if (isAuthenticated)
        {
            this.setState({
                name: user.first_name,
                surname: user.last_name,
                email: user.email
            })
        }
    }

    render () {

        if(this.props.checkout.orderSuccess) {
            return <Redirect to="/ordersuccess" />
        }

        const { name,
                email,
                address,
                city,
                country,
                postal, 
                isCard  } = this.state

        const shipDetails = {
            name,
            email,
            address,
            city,
            country,
            postal,
            default: true,
            address_type: "S"
        }

        const stripePromise = loadStripe('pk_test_51LXAGyHLXSuXXRsqYZiKwRwPedjADd0meHrXwVRyJbiuAyvYl0BRwB9GTLLbRqD0Y2TulmIh4Yh1SvqodQWrbsLo00gNNrQjjM');

        const checkoutComp = this.props.checkout.loading ? <div className='checkout-loader'><Loader/></div> :
        (
            isCard ? 
                <div className='payment-wrapper'>
                    <Elements stripe={stripePromise}>
                        <Payment shipDetails={shipDetails} placeOrder={this.props.placeOrder}/>
                    </Elements>
                </div>
                :
                <div className='shipping-wrapper'>
                    <div className='shipping-heading'>
                        Shipping details
                    </div>
                    <div>
                        <form className='shipping-form' onSubmit={this.handleSubmit}>
                            <div className='form-group'>
                                <input type='text' placeholder='Name' name='name' 
                                    value={this.state.name} onChange={this.handleChange} />
                            </div>
                            <div className='form-group'>
                                <input type='text' placeholder='Address' name='address' 
                                    value={this.state.address} onChange={this.handleChange}    />
                            </div>
                            <div className='form-group'>
                                <input type='text' placeholder='postal code' name='postal' 
                                    value={this.state.postal} onChange={this.handleChange}    />
                            </div>
                            <div className='form-group'>
                                <input type='text' placeholder='City' name='city' 
                                    value={this.state.city} onChange={this.handleChange}    />
                            </div>
                            <div className='form-group'>
                                <input type='text' placeholder='Country' name='country' 
                                    value={this.state.country} onChange={this.handleChange}    />
                            </div>
                            <div className='form-group'>
                                <input type='email' placeholder='Email' name='email' 
                                    value={this.state.email} onChange={this.handleChange}    />
                            </div>
                            <div className='form-group'>
                                <button type='submit'>continue</button>
                            </div>
                        </form>
                    </div>
                </div>
        ) 

        return (
            <>
              {checkoutComp}  
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    accounts: state.accounts,
    checkout: state.checkout
})

export default  connect(mapStateToProps, {placeOrder}) (Checkout)