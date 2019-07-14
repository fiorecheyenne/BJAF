import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

// Shared components
import Nav from "./shared/Nav";
import Footer from "./shared/Footer";

// Main page components
import SplashPage from "./containers/SplashPage";
import FavoritesPage from "./containers/FavoritesPage";
import RandomizerPage from "./containers/RandomizerPage";
import ResultsPage from "./containers/ResultsPage";
import ErrorPage from "./containers/ErrorPage";

export default function App() {
    return (
        <Router>
            <Route paht="/" component={Nav} />
            <Switch>
                <Route exact path="/" component={SplashPage} />
                <Route path="/user/favorites" component={FavoritesPage} />
                <Route path="/randomizer" component={RandomizerPage} />
                <Route path="/results" component={ResultsPage} />
                <Route component={ErrorPage} />
            </Switch>
            <Footer />
        </Router>
    );
}
