import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import sneakers from '../../styles/sneakers.webp'

class Home extends Component {

    state = {
    }

    static propTypes = {
    }

    render () {

        return (
            <div className='home-img-wrapper' style={{backgroundImage: `url(${sneakers})`}}>
                <Link to="/products">
                    <div className='shop-btn'>
                        Shop  all  
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                            <path d="m10 16-1.062-1.062 4.187-4.188H4v-1.5h9.125L8.938 5.062 10 4l6 6Z"/>
                        </svg>
                    </div>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

export default  connect(mapStateToProps, {}) (Home)