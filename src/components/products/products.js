import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import {getFilteredProducts, getNewPage, updatePanelStatus, updateCategory, updateSearch} from '../../actions/products'
import Filterbar from './filterbar';
import Loader from '../common/loader';


class Product extends Component {

    static propTypes = {
        products: PropTypes.object.isRequired,
        getFilteredProducts: PropTypes.func.isRequired,
        getNewPage: PropTypes.func.isRequired,
        updatePanelStatus: PropTypes.func.isRequired,
        updateCategory: PropTypes.func.isRequired,
        updateSearch: PropTypes.func.isRequired
        
    }

    state = {
        statusP: false,
        pageHeader: '',
        isSearch: false
    }

    handleAddCart = (product) => {
        this.props.addCart(product)
    }

    handlePanel = () => {
        this.setState({statusP: !this.state.statusP})

        const {statusP} = this.state
        const {panelStatus, updatePanelStatus} = this.props
        if (panelStatus !== statusP) updatePanelStatus(statusP)
        
    }

    handleChange = (e) => this.setState({[e.target.name]: e.target.value})

    handlePrev = () => {
        const {prevPage} = this.props.products

        if (prevPage === null)
        {
            return 'pagination-link'
        }
        else 
        {
            return 'pagination-link active'
        }
    }

    handleNext = () => {
        const {nextpage} = this.props.products

        if (nextpage === null)
        {
            return 'pagination-link'
        }
        else 
        {
            return 'pagination-link active'
        }
    }

    handleCategory = () => {
        const {getFilteredProducts} = this.props

        const {catSlug} = this.props.match.params
        switch (catSlug) {
            case 'women':
                this.setState({pageHeader: "for her"})
                this.props.updateCategory('women')
                break;
            case 'men':
                this.setState({pageHeader: "for him"})
                this.props.updateCategory('men')
                break;
            case 'search':
                this.setState({pageHeader: "search results"})
                break;
            default:
                this.setState({pageHeader: "collection"})
                this.props.updateCategory(null)
                break;
        }
        getFilteredProducts()
    }

    handlePageChange = (url) => this.props.getNewPage(url)

    componentDidMount() {
        //this.handleCategory()
        if(this.props.match.params.catSlug === "search")
        {
            this.setState({isSearch: true})
        }
        else {
            this.handleCategory()
            this.setState({isSearch: false})
        }
    }

    componentDidUpdate(prevProps) {
        this.handleNext()
        this.handlePrev()

        if (prevProps.match.params !== this.props.match.params) 
        {
            if(this.props.match.params.catSlug === "search")
            {
                this.setState({isSearch: true})
            }
            else {
                this.handleCategory()
                this.setState({isSearch: false})
            }
            
        }
    }

    handleSearch = (e) => {
        e.preventDefault()
        this.props.updateSearch(this.state.search)
        this.props.getFilteredProducts()
        this.setState({
            search: '',
            isOpen: false,
        })
    }

    render () {
        const {products, nextpage, prevPage, numProducts, panelStatus, loading} = this.props.products
        
        const prevDetails = this.handlePrev()

        const nextDetails = this.handleNext() 

        const searchBar = this.state.isSearch ? (<form className='search-form' onSubmit={this.handleSearch}>
                                                    <input className='search-bar'
                                                        type='text' placeholder='search' 
                                                        name='search' value={this.state.search}
                                                        onChange={this.handleChange}
                                                    />
                                                    <div >
                                                        {this.state.isEmpty ?   <svg xmlns="http://www.w3.org/2000/svg" height="21" viewBox='0 0 48 48' onClick={() => this.setState({isOpen:false})}>
                                                                                <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"/>
                                                                            </svg>: 
                                                                            <svg xmlns="http://www.w3.org/2000/svg" height="21" width="21" viewBox='0 0 48 48' onClick={() => this.handleSearch()}>
                                                                                <path d="m39.55 41.1-13-12.95q-1.5 1.3-3.475 2.025-1.975.725-4.125.725-5.1 0-8.625-3.525Q6.8 23.85 6.8 18.8q0-5 3.525-8.525Q13.85 6.75 18.9 6.75q5.05 0 8.575 3.525Q31 13.8 31 18.8q0 2.1-.725 4.1-.725 2-2.075 3.6l13 12.95Zm-20.6-12.45q4.05 0 6.9-2.875Q28.7 22.9 28.7 18.8t-2.85-6.95Q23 9 18.95 9q-4.15 0-7 2.85Q9.1 14.7 9.1 18.8t2.85 6.975q2.85 2.875 7 2.875Z"/>
                                                                            </svg>
                                                        }
                                                    </div>
                                                </form>):(<>
                                        <div className='pv-heading-wrapper'>
                                            <span className='productView-heading'>
                                                {this.state.pageHeader}
                                            </span>
                                        </div>
                                        <div className='settings-wrapper'>
                                            <div className={panelStatus ? 'sort-filter panel-open' : 'sort-filter'}
                                                onClick={() => this.handlePanel()}>
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-filter" fill="none" onClick={() => this.handlePanel()} viewBox="0 11 20 20">
                                                    <line x1="16.5" y1="17.5" x2="3.5" y2="17.5"  stroke-linecap="round"></line>
                                                    <line x1="16.5" y1="24.5" x2="3.5" y2="24.5"  stroke-linecap="round"></line>
                                                    <circle cx="13" cy="24.5" r="2" fill="white" ></circle>
                                                    <circle cx="7" cy="17.5" r="2" fill="white" ></circle>
                                                </svg>
                                                <span>Filter & Sort</span>
                                            </div>
                                            <div className='num-show'>
                                                <span>
                                                    {numProducts} products
                                                </span>
                                            </div>
                                        </div>
                                                        </>)

        console.log(this.state.isSearch)

        const productList =  loading ? (<Loader/>)
        :(
            products.map(product => {
                return (
                    <div className='card-wrapper' key={product.id}>
                        <Link to={`${product.category}/${product.slug}`}>
                            <div className='card-img'>
                                <img src={product.product_images[0].get_image}
                                    alt={product.name}
                                />
                            </div>
                            <div className='card-details'>
                                <div className='card-product-name'>
                                    <span>{product.name}</span>
                                </div>
                                <div className='product-price'>
                                    <span className='price-currency'>R</span>
                                    <span className='price'>{product.price}</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })
        )
        
        
        return (
            <>
                {searchBar}
                <Filterbar/>
                <div className='products-wrapper'>
                    {productList}
                </div>
                <div className='pagination-wrapper'>
                    <nav className='pagination-nav'>
                        <ul className='pagination-list'>
                            <li className='pagination-item'>
                                <div className={prevDetails}
                                    onClick={() => this.handlePageChange(prevPage)}>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 48 48'>
                                            <path d="M28.05 35.3 16.7 23.95 28.05 12.6l1.6 1.65-9.7 9.7 9.7 9.75Z"/>
                                        </svg>
                                    </span>
                                </div>
                            </li>
                            <li className='pagination-item'>
                                <div to=''  className='pagination-link'>
                                    <span></span>
                                </div>
                            </li>
                            <li className='pagination-item'>
                                <div  className={nextDetails}
                                    onClick={() => this.handlePageChange(nextpage)}>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 48 48'>
                                            <path d="m18.75 35.3-1.6-1.6 9.7-9.75-9.7-9.7 1.6-1.65L30.1 23.95Z"/>
                                        </svg>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.products,
})

export default  connect(mapStateToProps, {getFilteredProducts, getNewPage, updatePanelStatus, updateCategory, updateSearch}) (Product)