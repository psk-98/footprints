import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Alerts from './alerts'
import {changeShow} from '../../actions/errors'


class Alertswrapper extends Component {
    
    state = {
        message: null,
        show: false
    }

    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired,
        changeShow: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) 
    {
        const { error, changeShow } = this.props
        if (error.msg !== prevProps.error.msg)
        {
            if (error.msg.addSize) changeShow(true)
        }

        setTimeout(() => {
            changeShow(false)    
        }, 10000)

    }

    toggleShow = () => {
        this.setState({
            show: false
        })
    }

    render () {

        const {show, msg} = this.props.error

        const content = show ? (
            <div className='errorWrapper'>
                <Alerts message={msg.addSize}/>
            </div>
        ):(<></>)

        return (
            <>
                {content}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    error: state.errors,
})

export default  connect(mapStateToProps, {changeShow}) (Alertswrapper)