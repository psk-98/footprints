import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {store, persistor} from './store/store'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import reportWebVitals from './reportWebVitals';

import Navbar from './components/navbar/navbar'
import Home from './components/home/home';
import Products from './components/products/products'
import Filterbar from './components/products/filterbar';
import Product from './components/products/product';
import Cart from './components/cart/cart';
import Checkout from './components/checkout/checkout';
import Login from './components/accounts/login';
import Register from './components/accounts/register';
import Ordersuccess from './components/common/orderSuccess'

import './styles/global.css'
import './styles/navbar.css'
import './styles/home.css'
import './styles/products.css'
import './styles/product.css'
import './styles/filterbar.css'
import './styles/cart.css'
import './styles/checkout.css'
import './styles/alerts.css'
import './styles/accounts.css'
import './styles/payment.css'

import Alerts from './components/common/alertsWrapper';

import { loadUser } from './actions/accounts';

//store.dispatch(loadUser())


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/products/:catSlug/:productSlug/' component={Product} />
              <Route exact path='filter' component={Filterbar} />
              <Route exact path='/products' component={Products} />
              <Route exact path='/products/:catSlug' component={Products} />
              <Route exact path='/cart' component={Cart} />
              <Route exact path='/checkout' component={Checkout} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/ordersuccess' component={Ordersuccess} />
              <Route exact path='/search' component={Products} />
            </Switch>
          </div>
          <Alerts/>
          <Navbar/>
        </Router> 
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
