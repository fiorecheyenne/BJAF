import React, { useState } from "react";
import { Link } from "react-router-dom";

const randomizeAll = function(event) {
    event.preventDefault();
    fetch("https://api/randomizer")
        .then(data => data.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.warn(err);
        });
};

// TODO: Design initial index/splash page
export default function SplashPage() {
    return (
        <main>
            <div class="column is-full has-text-centered" id="divleft">
                <p>
                    <h1>Welcome to mixtly</h1>
                </p>
                <i class="fas fa-random" id="randombig" />
            </div>
            <div class="columns is-vcentered">
                <div
                    class="column is-offset-one-quarter is-one-quarter has-text-right is-full-mobile is-full-mobile has-text-centered-mobile"
                    id="basebutton">
                    <Link to="/randomizer">
                        <button class="button is-primary is-medium">Select a Base</button>
                    </Link>
                </div>
                <div class="column is-one-quarter is-full-mobile has-text-centered-mobile" id="randomizebutton">
                    <button class="button is-primary is-medium" onClick={randomizeAll}>
                        Randomize All
                    </button>
                </div>
            </div>
        </main>
    );
}
