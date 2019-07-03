import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

// Core application components
import Nav from "./shared/Nav";
import Footer from "./shared/Footer";
import SplashPage from "./containers/SplashPage";
import Favorites from "./Favorites";
import User from "./User";
import Randomizer from "./Randomizer";
import ErrorPage from "./ErrorPage";

export default function App() {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/" component={SplashPage} />
                <Route path="/user/:id" component={User} />
                <Route path="/user/:id/favorites" component={Favorites} />
                <Route path="/error" component={ErrorPage} />
                <Route path="/randomizer" component={Randomizer} />
            </Switch>
            <Footer />
        </Router>
    );
}
