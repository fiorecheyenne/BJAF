import React from "react";
import { Link } from "react-router-dom";

// TODO: Design main application navigation component
export default function Nav() {
    return (
        <nav class="navbar is-fixed-top " role="navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="">
                    <i class="fab fa-angellist" id="peace" />
                    <span id="appname">Schilderwald</span>
                </a>
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </a>
            </div>
            <div class="navbar-menu">
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-primary">
                                <string>Sign Up</string>
                            </a>
                            <a class="button is-light">Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
