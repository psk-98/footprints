import React, {Component} from 'react'
import { updateFilters, getFilteredProducts } from '../../actions/products'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {updatePanelStatus} from '../../actions/products'

class Filterbar extends Component {

    state = {
        toggleSort: false,
        toggleSize: false,
        XS: false,
        S: false,
        M: false,
        L: false,
        XL: false,
        sizeList: null,
        sort: '-date_added',
        priceAsc: false,
        priceDesc: false,
        aToZ: false,
        zToA: false,
        newest: false,
        oldest: false
    }

    static propTypes = {
        filters: PropTypes.object.isRequired,
        updateFilters: PropTypes.func.isRequired,
        getFilteredProducts: PropTypes.func.isRequired
    }

    handleFilter = () => {
        let payload = {
            sizeList: this.state.sizeList,
            sort: this.state.sort,
            panelStatus: false
        }
        this.props.updateFilters(payload)
        this.props.getFilteredProducts()
    }

    

    handleChange = (e) => this.setState({[e.target.name]: e.target.value})

    handleToggleSize = () => {
        this.setState({
            toggleSize: !this.state.toggleSize
        })
    }

    handleToggleSort = () => {
        this.setState({
            toggleSort: !this.state.toggleSort
        })
    }

    handleStyle = (name,value) => {
        let temp = []
        if (this.state.sizeList === null)
        {
            temp = [name]    
        }
        else
        {
            temp = this.state.sizeList
            temp.push(name)
        }
        
        this.setState({
            [name]: !value,
            sizeList: temp
        })
    }

    handleReset = () => {
        this.setState ({
            priceAsc: false,
            priceDesc: false,
            aToZ: false,
            zToA: false,
            newest: true,
            oldest: false,
            sort: '-date_added'
        })
        this.handleFilter()
    }
    
    handleSort = (sort, sortType) => {
        this.setState({
            priceAsc: false,
            priceDesc: false,
            aToZ: false,
            zToA: false,
            newest: false,
            oldest: false,
            [sortType]: true,
            sort
        })
    }

    render () {

        const {panelStatus} = this.props.filters


        return (
            <nav className={panelStatus ? 'filter-panel panel-open' : 'filter-panel'} >
                <div className='filters-wrappers'>
                    <div className='size-filter'>
                        <div className='expand-control'>
                            <span>Size</span>
                            <button onClick={() => this.handleToggleSize()} >
                                {this.state.toggleSize ? <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                                                                <path d="M5.083 10.583V9.375h9.834v1.208Z"/>
                                                            </svg> : 
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                                                                <path d="M9.396 14.875v-4.292H5.104V9.375h4.292V5.083h1.208v4.292h4.292v1.208h-4.292v4.292Z"/>
                                                            </svg>
                                }       
                            </button>
                        </div>
                        <div className={this.state.toggleSize? 'size-filter-options open' : 'size-filter-options closed'}>
                            <ul>
                                <li className={this.state.XS ? 'size-option active': 'size-option'} 
                                    onClick={() => this.handleStyle('XS',this.state.XS)}>
                                    XS
                                </li>
                                <li className={this.state.S ? 'size-option active': 'size-option'} 
                                    onClick={() => this.handleStyle('S',this.state.S)}>
                                    S
                                </li>
                                <li className={this.state.M ? 'size-option active': 'size-option'} 
                                    onClick={() => this.handleStyle('M',this.state.M)}>
                                    M
                                </li>
                                <li className={this.state.L ? 'size-option active': 'size-option'} 
                                    onClick={() => this.handleStyle('L',this.state.L)}>
                                    L
                                </li>
                                <li className={this.state.XL ? 'size-option active': 'size-option'} 
                                    onClick={() => this.handleStyle('XL',this.state.XL)}>
                                    XL
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='sort-by'>
                        <div className='expand-control'>
                            <span>Sort by</span>
                            <button onClick={() => this.handleToggleSort()}>
                                {this.state.toggleSort ? <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                                                                <path d="M5.083 10.583V9.375h9.834v1.208Z"/>
                                                            </svg> : 
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                                                                <path d="M9.396 14.875v-4.292H5.104V9.375h4.292V5.083h1.208v4.292h4.292v1.208h-4.292v4.292Z"/>
                                                            </svg>
                                }       
                            </button>
                        </div>
                        <div className={this.state.toggleSort? 'sort-options open' : 'sort-options closed'}>
                            <ul>
                                <li className={this.state.priceAsc ? 'sort-option active' : 'sort-option'} onClick={() => this.handleSort('price', 'priceAsc')} >
                                    Price,low to high
                                </li>
                                <li className={this.state.priceDesc ? 'sort-option active' : 'sort-option'} onClick={() => this.handleSort('-price', 'priceDesc')} >
                                    Price,high to low
                                </li>
                                <li className={this.state.aToZ ? 'sort-option active' : 'sort-option'} onClick={() => this.handleSort('name', 'aToZ')} >
                                    Alphabetically,A-Z
                                </li>
                                <li className={this.state.zToA ? 'sort-option active' : 'sort-option'} onClick={() => this.handleSort('-name', 'zToA')} >
                                    Alphabetically,Z-A
                                </li>
                                <li className={this.state.newest ? 'sort-option active' : 'sort-option'} onClick={() => this.handleSort('-date_added', 'newest')} >
                                    Newest
                                </li>
                                <li className={this.state.oldest ? 'sort-option active' : 'sort-option'} onClick={() => this.handleSort('dated_added', 'oldest')} >Oldest</li>
                            </ul>
                        </div>
                    </div>
                    <div className='action-btns'>
                        <button className='apply-btn' onClick={()=>this.handleFilter()}>
                            View results
                        </button>
                        <button className='clear-btn' onClick={()=>this.handleReset()}>
                            Clear
                        </button>
                    </div>
                </div>
                
            </nav>
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.products
})

export default  connect(mapStateToProps, {updateFilters, getFilteredProducts, updatePanelStatus}) (Filterbar)