import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

// TODO: Design initial index/splash page
export default function SplashPage(props) {
    // const [redirect, setRedirect] = useState("");
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
                    <button class="button is-primary is-medium" onClick={() => props.history.push("/results")}>
                        Randomize All
                    </button>
                </div>
            </div>
        </main>
    );
}
