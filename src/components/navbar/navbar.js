import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {updateSearch, getFilteredProducts} from '../../actions/products'
import { logout} from '../../actions/accounts'

class Navbar extends Component {

    static propTypes = {
        cart: PropTypes.object.isRequired,
        accounts: PropTypes.object.isRequired,
        updateSearch: PropTypes.func.isRequired,
        getFilteredProducts: PropTypes.func.isRequired,
    }

    state = {
        toggle: false,
        navState: "main",
        search: '',
        isOpen: false,
        isEmpty: true,
    }

    Toggle = () => {
        this.setState({
            toggle: !this.state.toggle,
        })
    }

    handleCartIcon = () => {
        
        console.log(this.props.cart)
        const {numberCart, cart} = this.props.cart

        if (cart.length !== 0)
        {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 48 48' height="21" >
                    <path d="M8 44V12h8.5v-.5q0-3.15 2.175-5.325Q20.85 4 24 4q3.15 0 5.325 2.175Q31.5 8.35 31.5 11.5v.5H40v32ZM24 7q-1.9 0-3.2 1.3-1.3 1.3-1.3 3.2v.5h9v-.5q0-1.9-1.3-3.2Q25.9 7 24 7Zm-7.5 14h3v-6h-3Zm12 0h3v-6h-3Z"/>
                </svg>
            )
        }
        else 
        {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" height="21" width="21" viewBox='0 0 48 48' fill='#000'>
                    <path d="M9 43V13h7.85v-.85q0-3 2.075-5.075T24 5q3 0 5.075 2.075t2.075 5.075V13H39v30Zm10.15-30.85V13h9.7v-.85q0-2.05-1.4-3.475Q26.05 7.25 24 7.25q-2.05 0-3.45 1.425-1.4 1.425-1.4 3.475Zm-7.9 28.6h25.5v-25.5h-5.6v6h-2.3v-6h-9.7v6h-2.3v-6h-5.6Zm0 0v-25.5Z"/>
                </svg>
            )
        }
    }

    handleChange = (e) => {
        if (e.target.value === '')
        {
            this.setState({ 
                [e.target.name]: e.target.value,
                isEmpty: true
            })
        }
        else {
            this.setState({ 
                [e.target.name]: e.target.value,
                isEmpty: false
            })
        }
        console.log(this.state.search)  
    
    }

    handleSearch = (e) => {
        this.props.updateSearch(this.state.search)
        this.props.getFilteredProducts()
        this.setState({
            search: '',
            isOpen: false,
        })
    }

    handleSearchBar = () => {
        const theReturn = this.state.isOpen ? (
            <>
                <div className='search-form' onSubmit={this.handleSearch}>
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
                </div>
            </>
        ):(
            <>
                <div className='burger-wrapper'>
                    <div className="burger" onClick={() => this.Toggle()}>
                        <div className="line line-1"></div>
                        <div className="line line-2"></div>
                        <div className="line line-3"></div>
                    </div>
                </div>
                <div className='logo'>
                    <Link to='/'>
                        FootPrints
                    </Link>
                </div>
                <div className='nav-list-top'>
                    <ul>
                        <li className="nav-item-top" 
                            onClick={() => this.setState({isOpen: true })}
                        >
                            <div className='nav-link-top'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="21" width="21" viewBox='0 0 48 48'>
                                    <path d="m39.55 41.1-13-12.95q-1.5 1.3-3.475 2.025-1.975.725-4.125.725-5.1 0-8.625-3.525Q6.8 23.85 6.8 18.8q0-5 3.525-8.525Q13.85 6.75 18.9 6.75q5.05 0 8.575 3.525Q31 13.8 31 18.8q0 2.1-.725 4.1-.725 2-2.075 3.6l13 12.95Zm-20.6-12.45q4.05 0 6.9-2.875Q28.7 22.9 28.7 18.8t-2.85-6.95Q23 9 18.95 9q-4.15 0-7 2.85Q9.1 14.7 9.1 18.8t2.85 6.975q2.85 2.875 7 2.875Z"/>
                                </svg>
                            </div>
                        </li>
                        <li className="nav-item-top">
                            {this.props.accounts.isAuthenticated ? (
                                <Link to='/login' className='nav-link-top'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 48 48' height="21">
                                        <path d="M24 23.95q-3.3 0-5.4-2.1-2.1-2.1-2.1-5.4 0-3.3 2.1-5.4 2.1-2.1 5.4-2.1 3.3 0 5.4 2.1 2.1 2.1 2.1 5.4 0 3.3-2.1 5.4-2.1 2.1-5.4 2.1ZM8 40v-4.7q0-1.9.95-3.25T11.4 30q3.35-1.5 6.425-2.25Q20.9 27 24 27q3.1 0 6.15.775 3.05.775 6.4 2.225 1.55.7 2.5 2.05.95 1.35.95 3.25V40Z"/>
                                    </svg>
                                </Link>
                            ):(
                                <Link to='/login' className='nav-link-top'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="21" viewBox='0 0 48 48'>
                                        <path d="M24 23.35q-2.9 0-4.775-1.875Q17.35 19.6 17.35 16.7q0-2.9 1.875-4.75T24 10.1q2.9 0 4.775 1.85 1.875 1.85 1.875 4.75t-1.875 4.775Q26.9 23.35 24 23.35ZM9 38.6v-3.8q0-1.6.85-2.8.85-1.2 2.2-1.85 3.2-1.4 6.125-2.1 2.925-.7 5.825-.7 2.9 0 5.825.725Q32.75 28.8 35.9 30.2q1.4.65 2.25 1.825Q39 33.2 39 34.8v3.8Zm2.25-2.25h25.5V34.8q0-.75-.5-1.475-.5-.725-1.3-1.125-2.95-1.45-5.575-2.025T24 29.6q-2.75 0-5.425.575T13 32.2q-.75.4-1.25 1.125t-.5 1.475ZM24 21.1q1.85 0 3.1-1.25t1.25-3.15q0-1.85-1.25-3.1T24 12.35q-1.85 0-3.1 1.25t-1.25 3.1q0 1.9 1.25 3.15T24 21.1Zm0-4.4Zm0 19.65Z"/>
                                    </svg>
                                </Link>
                            )}
                        </li>
                        <li className="nav-item-top">
                            <Link to='/cart' className='nav-link-top'>
                                {this.handleCartIcon()}
                            </Link>
                        </li>
                    </ul>
                </div>
            </>
        )
        return theReturn
    }

    render () {

        const navTop = this.handleSearchBar() 

        const authLink = this.props.accounts.isAuthenticated ? (
            <li className="nav-item" onClick={() => this.Toggle()}>
                <Link to='/products' className="nav-link" onClick={() => this.props.logout()}>
                    log out
                </Link>
            </li>
        ):(
            <>
                <li className="nav-item" onClick={() => this.Toggle()}>
                    <Link to='/login' className="nav-link">
                        login
                    </Link>
                </li>
                <li className="nav-item" onClick={() => this.Toggle()}>
                    <Link to='/register' className="nav-link">
                        Register
                    </Link>
                </li>
            </>
        )


        return (
            <>
                
                <nav className={this.state.toggle? "navbar change" : "navbar"}>
                    <div className="navbar-top">
                        <div className='nav-top-wrapper'>
                            {navTop}
                        </div>
                    </div>
                    <div className={this.state.toggle? "overlay changed" : "overlay"}></div>
                    <div>
                        <ul className="nav-list">
                            <li className="nav-item" onClick={() => this.Toggle()}>
                                <Link to='/products' className="nav-link">
                                    Collection
                                </Link>
                            </li>
                            <li className="nav-item" onClick={() => this.Toggle()}>
                                <Link to='/products/men' className="nav-link">
                                    For him
                                </Link>
                            </li>
                            <li className="nav-item" onClick={() => this.Toggle()}>
                                <Link to='/products/women' className="nav-link">
                                    For her
                                </Link>
                            </li>
                            {authLink}
                        </ul>
                        <div className='side-social-list'>
                            <div className='side-social-item'>
                                <Link to='' className='side-social-link'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 18.5 32">
                                        <path id="Icon_feather-facebook" data-name="Icon feather-facebook" d="M27,3H22.5A7.5,7.5,0,0,0,15,10.5V15H10.5v6H15V33h6V21h4.5L27,15H21V10.5A1.5,1.5,0,0,1,22.5,9H27Z" transform="translate(-9.5 -2)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                    </svg>
                                </Link>
                            </div>
                            <div className='side-social-item'>
                                <Link to='' className='side-social-link'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 32 32">
                                    <g id="Icon_feather-instagram" data-name="Icon feather-instagram" transform="translate(-2 -2)">
                                        <path id="Path_5" data-name="Path 5" d="M10.5,3h15A7.5,7.5,0,0,1,33,10.5v15A7.5,7.5,0,0,1,25.5,33h-15A7.5,7.5,0,0,1,3,25.5v-15A7.5,7.5,0,0,1,10.5,3Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                        <path id="Path_6" data-name="Path 6" d="M24,17.055A6,6,0,1,1,18.945,12,6,6,0,0,1,24,17.055Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                        <path id="Path_7" data-name="Path 7" d="M26.25,9.75h0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                    </g>
                                </svg>
                                </Link>
                            </div>
                            <div className='side-social-item'>
                                <Link to='' className='side-social-link'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 35 29.201">
                                        <path id="Icon_feather-twitter" data-name="Icon feather-twitter" d="M34.5,4.5a16.35,16.35,0,0,1-4.71,2.3A6.72,6.72,0,0,0,18,11.295v1.5A15.99,15.99,0,0,1,4.5,6s-6,13.5,7.5,19.5a17.46,17.46,0,0,1-10.5,3c13.5,7.5,30,0,30-17.25A6.75,6.75,0,0,0,31.38,10,11.58,11.58,0,0,0,34.5,4.5Z" transform="translate(-0.5 -3.375)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                    </svg>
                                </Link>
                            </div>

                        </div>
                    </div>
                    
                </nav>
                
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart,
    accounts: state.accounts,
})

export default  connect(mapStateToProps, {updateSearch, getFilteredProducts, logout}) (Navbar)