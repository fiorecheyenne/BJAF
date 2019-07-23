import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

// TODO: Design initial index/splash page
export default function SplashPage(props) {
    // const [redirect, setRedirect] = useState("");
    return (
        <main>
            <div class="bg" />
            <div class="column is-offset-4 is-4 has-text-centered" id="divleft">
                <p>
                    <span class="mixtly">MIXTLY</span>
                    <br />
                    Like Dutch Bros? Us too. <br />
                    Mixtly allows you to choose a drink type - such as coffee, tea, etc.
                    <br /> Once chosen, a randomly generated drink will appear for you! <br />
                    Randomize All will randomize all drink types and give you your selected drink! <br />
                    Lets get started!
                    <br />
                </p>
                <p class="buttongroup">
                    <Link to="/randomizer">
                        <a class="button is-primary is-medium is-rounded">Select drink type</a>
                    </Link>
                    <a class="button is-info has-text-dark is-medium is-rounded" onClick={() => props.history.push("/results")}>
                        Randomize All
                    </a>
                </p>
            </div>
        </main>
    );
}
