import React ,{ Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import {register} from '../../actions/accounts'


class Register extends Component {

    state = {
        name: '',
        surname: '',
        email: '',
        password: '',
        password2: ''
    }

    static propTypes = {
        register: PropTypes.func.isRequired,
        accounts: PropTypes.object
    }

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value})

    handleSubmit = (e) => {
        e.preventDefault();
        const {name, surname, email, password, password2} = this.state
        if(password === password2)
        {
            const newUser = {
                name, 
                surname,
                email,
                password
            }
            this.props.register(newUser);
            this.setState({
                name: '', 
                surname: '',
                email: '',
                password: '',
                password2: '',
            })    
        }
        else {
            console.log('passwords dont match')
        }
    }

    render(){
        if(this.props.accounts.isAuthenticated) {
            return <Redirect to="/" />
        }

        return(
            <div className="the-form">
                <h2 className="form-header">Register</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="name" placeholder="Name"
                            value={this.state.name} onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" name="surname" placeholder="Surname"
                            value={this.state.surname} onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" placeholder="Email Address"
                            value={this.state.email} onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" placeholder="Password"
                            value={this.state.password} onChange={this.handleChange}
                        />
                    </div>
                    
                    <div className="form-group">
                        <input type="password" name="password2" placeholder="Password again"
                            value={this.state.password2} onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit" className="sub-btn">Register</button>
                </form>
                <span>
                    Already have an account? <Link className="form-redirect" to="/login">Login</Link>
                </span>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    accounts: state.accounts
})

export default connect(mapStateToProps, { register }) (Register)