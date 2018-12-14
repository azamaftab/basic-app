import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../Navbar/nav-bar';
import Persons from '../Person/Persons';
import InsertEmployee from '../Employee/InsertEmployee';
import BurgerBuilder from '../Burger/BurgerBuilder/BurgerBuilder';

const Routing = () => {

    return (
        <Router>
            <div>
                <div>
                    <Navbar></Navbar>
                </div>
                <div className="container">
                    <Switch>
                        <Route path="/" component={Persons} exact={true} />
                        <Route path="/Employee" component={InsertEmployee} />
                        <Route path="/BurgerBuilder" component={BurgerBuilder} />
                    </Switch>
                </div>
            </div>
        </Router>
    );

}
export default Routing