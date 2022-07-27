import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import {getProduct} from '../../actions/products'
import {addCart} from '../../actions/cart'



class Product extends Component {

    static propTypes = {
        product: PropTypes.object.isRequired,
        getProduct: PropTypes.func.isRequired,
        addCart: PropTypes.func.isRequired,
    }

    state = {
        numImages: 0,
        imgIndex: 0,
        XS: false,
        S: false,
        M: false,
        L: false,
        XL: false,
        sizeSelected: {
            selected: false,
            size: ''
        }
    }

    handleAddCart = (product) => {
        const {size, selected} = this.state.sizeSelected
        if (selected)
        {
            const productOb = {
                product,
                size
            }
            this.props.addCart(productOb)
        }
        else console.log('select size')
        
    }

    //handleSize = (e) => this.setState({size: e.target.id})

    handleSizes = (size) => {
        this.setState ({
            XS: false,
            S: false,
            M: false,
            L: false,
            XL: false,
            [size]: true,
            sizeSelected: {
                selected: true,
                size: size
            }
        })
    }

    componentDidMount() {
        const {getProduct, match} = this.props
        getProduct(match.url)
    }

    componentDidUpdate(prevProps) {
        const {product} = this.props
        if (prevProps.product !== product)
        {
            let imgLength = product.productImages.length
            this.setState({
                numImages: imgLength
            })
            
        }
    }


    handleSlider = (direction) => {
        const { numImages, imgIndex } = this.state
        if (direction === 'fwd' && numImages-1 > imgIndex )
         {
            let temp = imgIndex + 1
            this.setState({
                imgIndex: temp
            })
         }
         if (direction === 'back' && imgIndex > 0)
         {
            let temp = imgIndex - 1
            this.setState({
                imgIndex: temp
            })
         }
    }

    handleDisplay = () => {
        const {productImages, productStock} = this.props.product

        if (productStock.length === 0 )
        {
            console.log('empty')
        }
        else 
        {
            console.log('not empty')
        }
    }

    render () {
        const {product} = this.props
        const {imgIndex, numImages} = this.state
        const {productImages, productStock} = product

       

        const imgMap = productStock ? (
            this.handleDisplay()
            
        ):(<>No stock</>)

        const productDetail = product ? (
            <>
                <div className='product-wrapper'>
                    <div className='product-img'>
                        
                        <img src={product.productImages[imgIndex].get_image}/>
                        <div className='img-selectors'>
                            <div onClick={()=> this.handleSlider('back')} >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 48 48'>
                                    <path d="M28.05 35.3 16.7 23.95 28.05 12.6l1.6 1.65-9.7 9.7 9.7 9.75Z"/>
                                </svg>
                            </div>
                            <div className='img-progress'>
                                    {imgIndex + 1}/{numImages}
                            </div>
                            <div onClick={()=> this.handleSlider('fwd')} >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 48 48'>
                                    <path d="m18.75 35.3-1.6-1.6 9.7-9.75-9.7-9.7 1.6-1.65L30.1 23.95Z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='product-details'>
                        <div className='product-name'>
                            <span>{product.name}</span>
                        </div>
                        <div className='product-price'>
                                <span className='price-currency'>R</span>
                                <span className='price'>{product.price}</span>
                        </div>
                        <div className='product-sizes'>
                            <ul>
                                <li className={this.state.XS ? 'size-option active': 'size-option'} 
                                    onClick={() => this.handleSizes('XS')}>
                                    {product.productStock[0].size}
                                </li>
                                <li className={this.state.S ? 'size-option active': 'size-option'} 
                                    onClick={() => this.handleSizes('S')}>
                                    S
                                </li>
                                <li className={this.state.M ? 'size-option active': 'size-option'} 
                                    onClick={() => this.handleSizes('M')}>
                                    M
                                </li>
                                <li className={this.state.L ? 'size-option active': 'size-option'} 
                                    onClick={() => this.handleSizes('L')}>
                                    L
                                </li>
                                <li className={this.state.XL ? 'size-option active': 'size-option'} 
                                    onClick={() => this.handleSizes('XL')}>
                                    XL
                                </li>
                            </ul>
                        </div>
                        <div>
                        </div>
                        <div className='add-cart-btn' onClick={() => this.handleAddCart(product)}>
                            Add to bag
                        </div>
                        <div className='product-desc'>
                            {product.description}
                        </div>
                    </div>
                </div>  
            </>
        ):(<></>)

        return (
            <>
            {productDetail}
            {imgMap}
            </>
            
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.products.product
})

export default  connect(mapStateToProps, {getProduct, addCart}) (Product)