import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HeaderMenu from './components/HeaderMenu';
import Footer from './components/Footer';
import Home from './views/Home';
import ShoppingCart from './views/ShoppingCart';

class App extends Component {
  _render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>mano</p>
        </header>
      </div>
    );
  }

  render() {
    return (
      <BrowserRouter>
        <HeaderMenu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shoppingcart" component={ShoppingCart} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
