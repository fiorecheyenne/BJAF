import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Favorites from "./Favorites";
import User from "./User";
import Index from "./Index";
import Randomizer from "./Randomizer";
import Nav from "./Nav";
import ErrorPage from "./ErrorPage";

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Route exact path="/" component={Index} />
                <Route exact path="/user/:id" component={User} />
                <Route exact path="/user/:id/favorites" component={Favorites} />
                <Route exact path="/error" component={ErrorPage} />
                <Route exact path="/randomizer" component={Randomizer} />
            </div>
        </Router>
    );
}
