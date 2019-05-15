import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Details from './components/Details'
import Default from './components/Default'
import ProductList from './components/ProductList'
import Modal from './components/Modal'

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
     <React.Fragment>
       <Navbar />
       <Switch>
         <Route exact path="/" component={ ProductList } />
         <Route exact path="/details" component={ Details } />
         <Route exact path="/cart" component={ Cart } />
         <Route component={ Default } />
       </Switch>
       <Modal/>
       </React.Fragment>
    );
  }
}

export default App;
