import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link, Redirect } from 'react-router-dom'
import { increaseQuantity, decreaseQuantity, deleteCart} from '../../actions/cart'


class Cart extends Component {

    static propTypes = {
        cart: PropTypes.object.isRequired,
        increaseQuantity: PropTypes.func.isRequired, 
        decreaseQuantity: PropTypes.func.isRequired, 
        deleteCart: PropTypes.func.isRequired,
        accounts: PropTypes.object.isRequired
    }

    state = {
        redirect: false,
        showModal: false,
        isEmpty: false
    }

    handleTotalPrice = () => {
        const {cart} = this.props.cart
        let totalPrice = 0
        for (let i = 0; i < cart.length; i++) {
            totalPrice = totalPrice + (cart[i].price * cart[i].quantity)
            
        }
        
        return totalPrice
    }

    handlePriceDetails = (product) => {
        if (product.quantity > 1)
        {
            return (
                <>
                    <div className='price-quantity'>
                        {product.quantity} X R{product.price}
                    </div>
                    <div className='item-total-price'>
                        R{product.price * product.quantity}
                    </div>
                </>
            )
        }
        else
        {
            return (
                <>
                    <div className='item-total-price'>
                        R{product.price * product.quantity}
                    </div>
                </>
            )
        }
    }

    handleDecrease = (index) => {
        const {cart} = this.props.cart
        if (cart[index].quantity > 1)
        {
            this.props.decreaseQuantity(index)
        }
        else {
            this.props.deleteCart(index)
        }
    }

    handleCartCheck = () => {
        const {cart, numberCart} = this.props.cart
        if (cart.length === 0 || numberCart === 0) return true

        return false
    }

    handleToCheckout = () => {
        
        if (this.props.accounts.isAuthenticated)
        {
            this.setState({
                redirect: true,
                showModal: false
            })            
        }
        else {
            this.setState({
                showModal: true,
                redirect: false
            })
        }
    }

    render () {
        const {increaseQuantity, decreaseQuantity} = this.props

        const {cart, numberCart} = this.props.cart

        const isEmpty = this.handleCartCheck()

        if (this.state.redirect) return <Redirect to='/checkout' />

        const modal = this.state.showModal ? (
            <>
                <div className='modal-wrapper'>
                    <div className='modal'>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" height="21" viewBox='0 0 48 48' onClick={() => this.setState({showModal:false})}>
                                <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"/>
                            </svg>
                        </button>
                        <Link to="/login">
                            <div className='auth-btn'>
                                Login
                            </div>
                        </Link>
                        {
                            <Link to='/checkout'>
                                <div className='guest-btn' aria-disabled>
                                    Guest checkout
                                </div>
                            </Link>
                        }
                    </div>
                    
                </div>
            </>
        ):(<></>)

        const cartItems = isEmpty ? (<div className='empty-msg'> your Bag is empty</div>):(
            cart.map(product => {
                return (
                    <>
                        <div className='cart-item-wrapper'>
                            <div className='item-name'>
                                {product.name}
                            </div>
                            <div className='item-details-wrapper'>
                                <div className='item-img'>
                                    <img src={product.image} alt={product.name}/>
                                </div>
                                <div className='item-details'>
                                    <div className='item-size'>
                                        UK {product.size}
                                    </div>
                                    <div className='item-quantity'>
                                        <div className='quantity-change' onClick={() => decreaseQuantity(cart.indexOf(product))} >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 20 20'>
                                                <path d="M5.083 10.583V9.375h9.834v1.208Z"/>
                                            </svg>
                                        </div>
                                        <div className='num-quantity'>
                                            {product.quantity}
                                        </div>
                                        <div className='quantity-change' onClick={() => {increaseQuantity(cart.indexOf(product))}} >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 20 20'>
                                                <path d="M9.396 14.875v-4.292H5.104V9.375h4.292V5.083h1.208v4.292h4.292v1.208h-4.292v4.292Z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='price-details'>
                                        {this.handlePriceDetails(product)}
                                    </div>
                                    <div className='delete-item' onClick={() => this.props.deleteCart(cart.indexOf(product))}>
                                        delete
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </>
                )
            })
        )

        return (
            <>
                {modal}
                <div className='cart-wrapper'>
                    <div className='cart-top'>
                        <div className='cart-heading'>Bag</div>
                        <div className='cart-details'>
                            <div className='num-items-cart'>
                                {numberCart} items    
                            </div>
                            |
                            <div className='cart-total'>
                                R {Math.round(this.handleTotalPrice() * 100) / 100}
                            </div>
                        </div>
                    </div>
                    <div className='cart-items-wrapper'>
                        {cartItems}
                    </div>
                </div>
                { isEmpty ? (<></>):
                    <div className='checkout-btn' onClick={() => this.handleToCheckout()}>
                        Checkout
                    </div>
                }
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart,
    accounts: state.accounts
})

export default  connect(mapStateToProps, {increaseQuantity, decreaseQuantity, deleteCart}) (Cart)