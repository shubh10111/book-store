import {Component} from "react"
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom' ;

import Home from "./component/Home"
import BookList from "./component/BookList";
import BookDetails from "./component/BookDetails";
import Cart from "./component/Cart";
import Checkout from "./component/Checkout";
import NotFound from "./component/NotFound";

import './App.css';

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/books" component = {BookList}/>
          <Route exact path = "/books/:id" component = {BookDetails}/>
          <Route exact path = "/cart" component = {Cart}/>
          <Route exact path = "/checkout" component = {Checkout}/>
          <Route exact path = "/not-found" component = {NotFound}/>
          <Redirect to = "/not-found"/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
