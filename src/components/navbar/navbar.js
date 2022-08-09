import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {

    state = {
        toggle: false,
        navState: "main"
    }

    Toggle = () => {
        this.setState({
            toggle: !this.state.toggle,
        })
    }

    

    render () {
        return (
            <>
                
                <nav className={this.state.toggle? "navbar change" : "navbar"}>
                    <div className="navbar-top">
                        <div className='nav-top-wrapper'>
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
                                    <li className="nav-item-top">
                                        <Link to='' className='nav-link-top user-top'>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="21" width="21" viewBox='0 0 48 48'>
                                                <path d="m39.55 41.1-13-12.95q-1.5 1.3-3.475 2.025-1.975.725-4.125.725-5.1 0-8.625-3.525Q6.8 23.85 6.8 18.8q0-5 3.525-8.525Q13.85 6.75 18.9 6.75q5.05 0 8.575 3.525Q31 13.8 31 18.8q0 2.1-.725 4.1-.725 2-2.075 3.6l13 12.95Zm-20.6-12.45q4.05 0 6.9-2.875Q28.7 22.9 28.7 18.8t-2.85-6.95Q23 9 18.95 9q-4.15 0-7 2.85Q9.1 14.7 9.1 18.8t2.85 6.975q2.85 2.875 7 2.875Z"/>
                                            </svg>
                                        </Link>
                                    </li>
                                    <li className="nav-item-top user-top">
                                        <Link to='/search' className='nav-link-top'>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="21" viewBox='0 0 48 48'>
                                                <path d="M24 23.35q-2.9 0-4.775-1.875Q17.35 19.6 17.35 16.7q0-2.9 1.875-4.75T24 10.1q2.9 0 4.775 1.85 1.875 1.85 1.875 4.75t-1.875 4.775Q26.9 23.35 24 23.35ZM9 38.6v-3.8q0-1.6.85-2.8.85-1.2 2.2-1.85 3.2-1.4 6.125-2.1 2.925-.7 5.825-.7 2.9 0 5.825.725Q32.75 28.8 35.9 30.2q1.4.65 2.25 1.825Q39 33.2 39 34.8v3.8Zm2.25-2.25h25.5V34.8q0-.75-.5-1.475-.5-.725-1.3-1.125-2.95-1.45-5.575-2.025T24 29.6q-2.75 0-5.425.575T13 32.2q-.75.4-1.25 1.125t-.5 1.475ZM24 21.1q1.85 0 3.1-1.25t1.25-3.15q0-1.85-1.25-3.1T24 12.35q-1.85 0-3.1 1.25t-1.25 3.1q0 1.9 1.25 3.15T24 21.1Zm0-4.4Zm0 19.65Z"/>
                                            </svg>
                                        </Link>
                                    </li>
                                    <li className="nav-item-top">
                                        <Link to='/cart' className='nav-link-top'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="21" width="21" viewBox='0 0 48 48'>
                                            <path d="M9 43V13h7.85v-.85q0-3 2.075-5.075T24 5q3 0 5.075 2.075t2.075 5.075V13H39v30Zm10.15-30.85V13h9.7v-.85q0-2.05-1.4-3.475Q26.05 7.25 24 7.25q-2.05 0-3.45 1.425-1.4 1.425-1.4 3.475Zm-7.9 28.6h25.5v-25.5h-5.6v6h-2.3v-6h-9.7v6h-2.3v-6h-5.6Zm0 0v-25.5Z"/>
                                        </svg>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <ul className="nav-list">
                        <li className="nav-item" onClick={() => this.Toggle()}>
                            <Link to='/products' className="nav-link">Collection</Link>
                        </li>
                        <li className="nav-item" onClick={() => this.Toggle()}>
                            <Link to='/products/men' className="nav-link">For him</Link>
                        </li>
                        <li className="nav-item" onClick={() => this.Toggle()}>
                            <Link to='/products/women' className="nav-link">For her</Link>
                        </li>
                    </ul>
                    <div className='side-social-list'>
                        <div className='side-social-item'>
                            <Link to='' className='side-social-link'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20.931" height="17" viewBox="0 0 20.931 17">
                                    <path id="Icon_awesome-twitter" data-name="Icon awesome-twitter" d="M18.78,7.617c.013.186.013.372.013.558A12.122,12.122,0,0,1,6.588,20.381,12.123,12.123,0,0,1,0,18.455a8.874,8.874,0,0,0,1.036.053,8.591,8.591,0,0,0,5.326-1.833A4.3,4.3,0,0,1,2.351,13.7a5.41,5.41,0,0,0,.81.066,4.537,4.537,0,0,0,1.129-.146A4.29,4.29,0,0,1,.85,9.41V9.357A4.32,4.32,0,0,0,2.789,9.9,4.3,4.3,0,0,1,1.461,4.164a12.194,12.194,0,0,0,8.845,4.489,4.843,4.843,0,0,1-.106-.983,4.294,4.294,0,0,1,7.424-2.935A8.446,8.446,0,0,0,20.347,3.7a4.278,4.278,0,0,1-1.886,2.364,8.6,8.6,0,0,0,2.47-.664A9.222,9.222,0,0,1,18.78,7.617Z" transform="translate(0 -3.381)" />
                                </svg>
                            </Link>
                        </div>
                        <div className='side-social-item'>
                            <Link to='' className='side-social-link'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                                    <path id="Icon_ionic-logo-facebook" data-name="Icon ionic-logo-facebook" d="M20.561,4.5H5.439a.939.939,0,0,0-.939.939V20.561a.939.939,0,0,0,.939.939H13V14.771H10.968V12.292H13V10.459a3.23,3.23,0,0,1,3.484-3.391c.939,0,1.948.071,2.183.1V9.463H17.1c-1.067,0-1.271.5-1.271,1.248v1.58h2.541l-.332,2.479H15.833V21.5h4.728a.939.939,0,0,0,.939-.939V5.439A.939.939,0,0,0,20.561,4.5Z" transform="translate(-4.5 -4.5)" />
                                </svg>
                            </Link>
                        </div>
                        <div className='side-social-item'>
                            <Link to='' className='side-social-link'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17.004" height="17" viewBox="0 0 17.004 17">
                                    <path id="Icon_awesome-instagram" data-name="Icon awesome-instagram" d="M8.5,6.379a4.359,4.359,0,1,0,4.359,4.359A4.352,4.352,0,0,0,8.5,6.379Zm0,7.192a2.834,2.834,0,1,1,2.834-2.834A2.839,2.839,0,0,1,8.5,13.571ZM14.052,6.2a1.017,1.017,0,1,1-1.017-1.017A1.014,1.014,0,0,1,14.052,6.2Zm2.887,1.032a5.031,5.031,0,0,0-1.373-3.562A5.064,5.064,0,0,0,12,2.3c-1.4-.08-5.61-.08-7.014,0A5.057,5.057,0,0,0,1.428,3.667,5.047,5.047,0,0,0,.054,7.229c-.08,1.4-.08,5.61,0,7.014A5.031,5.031,0,0,0,1.428,17.8,5.071,5.071,0,0,0,4.99,19.178c1.4.08,5.61.08,7.014,0A5.031,5.031,0,0,0,15.566,17.8a5.064,5.064,0,0,0,1.373-3.562c.08-1.4.08-5.607,0-7.01Zm-1.813,8.516a2.869,2.869,0,0,1-1.616,1.616c-1.119.444-3.774.341-5.011.341s-3.9.1-5.011-.341a2.869,2.869,0,0,1-1.616-1.616c-.444-1.119-.341-3.774-.341-5.011s-.1-3.9.341-5.011A2.869,2.869,0,0,1,3.487,4.111c1.119-.444,3.774-.341,5.011-.341s3.9-.1,5.011.341a2.869,2.869,0,0,1,1.616,1.616c.444,1.119.341,3.774.341,5.011S15.569,14.633,15.126,15.749Z" transform="translate(0.005 -2.238)" />
                                </svg>
                            </Link>
                        </div>

                    </div>
                </nav>
                <div className={this.state.toggle? "overlay changed" : "overlay"}></div>
            </>
        )
    }
}

export default  Navbar