import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { increaseQuantity, decreaseQuantity, deleteCart} from '../../actions/cart'


class Cart extends Component {

    static propTypes = {
        cart: PropTypes.object.isRequired,
        increaseQuantity: PropTypes.func.isRequired, 
        decreaseQuantity: PropTypes.func.isRequired, 
        deleteCart: PropTypes.func.isRequired,
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
        const {cart, numberCart} = this.props.cart
        if (cart[index].quantity > 1)
        {
            this.props.decreaseQuantity(index)
        }
        else {
            this.props.deleteCart(index)
        }
    }

    

    render () {
        const {increaseQuantity, decreaseQuantity, deleteCart} = this.props

        const {cart, numberCart} = this.props.cart


        const cartItems = cart ? (
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
                                    <div className='delete-item'>
                                        delete
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </>
                )
            })
        ):(<></>)

        return (
            <>
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
                <Link to='/checkout' >
                    <div className='checkout-btn'>
                        Checkout
                    </div>
                </Link>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart
})

export default  connect(mapStateToProps, {increaseQuantity, decreaseQuantity, deleteCart}) (Cart)