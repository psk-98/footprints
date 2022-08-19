import React ,{ Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import {login} from '../../actions/accounts'

class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value})

    handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = this.state
        this.props.login(email, password);
        this.setState({
            email: '',
            password: ''
        })
    }

    render(){
        if(this.props.isAuthenticated) {
            return <Redirect to="/" />
        }

        return(
            <div className="the-form">
                <h2 className="form-header">Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="email" placeholder="Email Address"
                            value={this.state.email} onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" placeholder="Password"
                            value={this.state.password} onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit" className="sub-btn">Login</button>
                </form>
                <span>
                    Don't have an account? <Link className="form-redirect" to="/register">register</Link>
                </span>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.accounts.isAuthenticated
})

export default connect(mapStateToProps, { login  }) (Login)