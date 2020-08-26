import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home'
import Pedido from './pages/Pedido'


export default function Routes(){
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/pedido" component={Pedido} />
            </Switch>
        </Router>
    )
}