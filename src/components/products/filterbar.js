import React, {Component} from 'react'
import { updateFilters, getFilteredProducts } from '../../actions/products'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {updatePanelStatus} from '../../actions/products'

class Filterbar extends Component {

    state = {
        toggleSort: false,
        togglePrice: false,
        toggleSize: false,
        sizeList: null,
        sort: '-date_added',
        fromPrice: '',
        toPrice: '',
        priceAsc: false,
        priceDesc: false,
        aToZ: false,
        zToA: false,
        newest: false,
        oldest: false,
        UK3: {isActive: false, name: 3},
        UK4: false,
        UK5: false,
        UK6: false,
        UK7: false,
        UK8: false,
        UK9: false,
        UK10: false,
        UK11: false,
        UK12: false,
        UK13: false,
        UK14: false,
        UK15: false,
    }

    static propTypes = {
        filters: PropTypes.object.isRequired,
        updateFilters: PropTypes.func.isRequired,
        getFilteredProducts: PropTypes.func.isRequired
    }

    handleFilter = () => {
        const {fromPrice, toPrice, sizeList, sort} = this.state
        let payload = {
            sizeList: sizeList,
            sort: sort,
            panelStatus: false
        }
        if (fromPrice !== null || fromPrice !== '' ) payload.fromPrice = fromPrice
        if (toPrice !== null || toPrice !== '') payload.toPrice = toPrice
        this.props.updateFilters(payload)
        this.setState({
            sizeList: null,
            sort: '-date_added',
            fromPrice: '',
            toPrice: '',
        })
        this.props.getFilteredProducts()
    }

    

    handleChange = (e) => this.setState({[e.target.name]: e.target.value})

    handleTogglePrice = () => {
        this.setState({
            togglePrice: !this.state.togglePrice
        })
    }

    handleToggleSort = () => {
        this.setState({
            toggleSort: !this.state.toggleSort
        })
    }

    handleToggleSize = () => {
        this.setState({
            toggleSize: !this.state.toggleSize
        })
    }

    handleStyle = (name,value) => {
        console.log(name)
        console.log(value)
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
            [name]: {isActive:!value, name: 3},
            sizeList: temp
        })
        console.log(this.state.[name])

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

        const { UK4, UK5, UK6, UK7, UK8, UK9, UK10, UK11, UK12, UK13, UK14, UK15} = this.state

        const UK3 = "3"
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
                                <li className={UK3 ? 'size-option active': 'size-option'} 
                                    onClick={() => this.handleStyle('3',UK3.isActive)}>
                                    3
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='price-filter'>
                        <div className='expand-control'>
                            <span>Price</span>
                            <button onClick={() => this.handleTogglePrice()}>
                                {this.state.togglePrice ? <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                                                                <path d="M5.083 10.583V9.375h9.834v1.208Z"/>
                                                            </svg> : 
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                                                                <path d="M9.396 14.875v-4.292H5.104V9.375h4.292V5.083h1.208v4.292h4.292v1.208h-4.292v4.292Z"/>
                                                            </svg>
                                }       
                            </button>
                        </div>
                        <div className={this.state.togglePrice ? 'price-filter-options open' : 'price-filter-options closed'}>
                                <input type='number' name='fromPrice' step="0.01" min="0"
                                value={this.state.fromPrice} placeholder="from" onChange={this.handleChange}/>
                                <input type='text' name='toPrice' placeholder="to"
                                value={this.state.toPrice} step="0.01" min="0" onChange={this.handleChange}/>
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