import React, {Component} from 'react'
import { connect } from 'react-redux'

class Checkout extends Component {

    state = {
        alertStatus: false,
        name: '',
        surname: '',
        cName: '',
        email: '',
        phone: '',
        address: '',
        postal: '',
        city: '',
        country: '',
    }

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value})

    handleSubmit = (e) => {
        e.preventDefault();
        const { name,
                surname,
                cName,
                email,
                phone,
                address,
                city,
                country,
                postal   } = this.state
        
        if(name === '' || name === null) this.setState({alertStatus: true})
        if(surname === '' || surname === null) this.setState({alertStatus: true})
        if(email === '' || email === null) this.setState({alertStatus: true})
        if(phone === '' || phone === null) this.setState({alertStatus: true})
        if(address === '' || address === null) this.setState({alertStatus: true})
        if(city === '' || city === null) this.setState({alertStatus: true})
        if(country === '' || country === null) this.setState({alertStatus: true})
        if(postal === '' || postal === null) this.setState({alertStatus: true})

        const shipDetails = {
            name,
            surname,
            cName,
            email,
            phone,
            address,
            city,
            country,
            postal
        }

        this.setState({
            name: '',
            surname: '',
            cName: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            country: '',
            postal: '',
        })

    }

    render () {
        console.log(this.state.name)

        return (
            <>
                <div className='shipping-wrapper'>
                    <div className='shipping-heading'>
                        Shipping details
                    </div>
                    <div>
                        <form className='shipping-form'>
                            <div className='form-group'>
                                <input type='text' placeholder='Name' name='name' 
                                    value={this.state.name} onChange={this.handleChange} />
                            </div>
                            <div className='form-group'>
                                <input type='text' placeholder='Surname' name='surname' 
                                    value={this.state.surname} onChange={this.handleChange} />
                            </div>
                            <div className='form-group'>
                                <input type='text' placeholder='Company name (optional)' name='cName' 
                                    value={this.state.cName} onChange={this.handleChange}    />
                            </div>
                            <div className='form-group'>
                                <input type='text' placeholder='Address' name='address' 
                                    value={this.state.address} onChange={this.handleChange}    />
                            </div>
                            <div className='form-group'>
                                <input type='text' placeholder='postal code' name='postal' 
                                    value={this.state.postal} onChange={this.handleChange}    />
                            </div>
                            <div className='form-group'>
                                <input type='text' placeholder='City' name='city' 
                                    value={this.state.city} onChange={this.handleChange}    />
                            </div>
                            <div className='form-group'>
                                <input type='text' placeholder='Country' name='country' 
                                    value={this.state.country} onChange={this.handleChange}    />
                            </div>
                            <div className='form-group'>
                                <input type='tel' placeholder='phone number' name='phone' 
                                    value={this.state.phone} onChange={this.handleChange}    />
                            </div>
                            <div className='form-group'>
                                <input type='email' placeholder='Email' name='email' 
                                    value={this.state.email} onChange={this.handleChange}    />
                            </div>
                            <div className='form-group'>
                                <button type='submit'>continue</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
})

export default  connect(mapStateToProps, {}) (Checkout)