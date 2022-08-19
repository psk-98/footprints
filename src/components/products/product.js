import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {getProduct} from '../../actions/products'
import {addCart} from '../../actions/cart'
import { returnErrors } from '../../actions/errors'


class Product extends Component {

    static propTypes = {
        product: PropTypes.object.isRequired,
        getProduct: PropTypes.func.isRequired,
        returnErrors: PropTypes.func.isRequired,
        addCart: PropTypes.func.isRequired,
        loading: PropTypes.object.isRequired,
    }

    state = {
        numImages: 0,
        imgIndex: 0,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false,
        16: false,
        XS: false,
        S: false,
        M: false,
        L: false,
        XL: true,
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
        else{
            const msg = {
                msg: {addSize: "select a size"},
                status: null
            }
            this.props.returnErrors({addSize: "select a size"}, null)


            console.log('select size')
        } 
        
    }

    handleSizes = (size) => {
        this.setState ({
            4: false,
            5: false,
            6: false,
            7: false,
            8: false,
            9: false,
            10: false,
            11: false,
            12: false,
            13: false,
            14: false,
            15: false,
            16: false,
            XS: false,
            S: false,
            M: false,
            L: false,
            XL: true,
            [size]: true,
            sizeSelected: {
                selected: true,
                size: size
            }
        })
    }

    componentDidMount() {
        const {productSlug} = this.props.match.params
        const {getProduct} = this.props
        getProduct(productSlug)
    }

    componentDidUpdate(prevProps) {
        const {product} = this.props
        if (prevProps.product !== product)
        {
            let imgLength = product.product_images.length
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

    handleSizeDisplay = () => {
        const {product_stock} = this.props.product
        let theReturn = ''
        if (product_stock.length !== 0)
        {
           theReturn =  product_stock.map(stock => {
                    
                    return (
                        <>
                            <li key={stock.size} className={this.state[stock.size] ? 'size-option active': 'size-option'} 
                                onClick={() => this.handleSizes(stock.size)}>
                                {stock.size}
                            </li>
                        </>
                    )
                })
            
        }
        else {
            theReturn = <>
                    <div className='product-out'>
                        Out of stock
                    </div>
                </>
        }
        return theReturn
    }
 
    handleImgs = () => {
        const {product_images} = this.props.product
        return (
            product_images.map(image => {
                return (
                    <>
                        <img src={image.get_image} />
                    </>
                )
            })
        )
    }

    render () {
        const {product} = this.props
        const {imgIndex, numImages} = this.state

        const productDetail = product ? (
            <>
                <div className='product-wrapper'>
                    <div className='product-img'>
                        <div className='product-img-sm'>
                            <img src={product.product_images[imgIndex].get_image}/>
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
                        
                    </div>
                    <div className='product-img-md'>
                        {this.handleImgs()}
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
                                {this.handleSizeDisplay()}
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
            </>
            
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.products.product,
    loading: state.products.loading
})

export default  connect(mapStateToProps, {getProduct, addCart, returnErrors}) (Product)