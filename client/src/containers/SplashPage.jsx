import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

const margin = {
    marginTop: "15px",
};
export default function SplashPage(props) {
    // const [redirect, setRedirect] = useState("");
    return (
        <main>
            <div class="bg" />
            <div class="column is-12-mobile is-8-desktop is-offset-2-desktop has-text-centered" id="divleft">
                <span id="mixtly"> MIXTLY</span>
                <br />
                <span id="splash-font">
                    Like Dutch Bros? Us too. <br />
                    Sometimes we dont always know what we want, though! The menu is so vast, deciding can be overwhelming.
                    <u>Especially</u> if you haven't been there! Thus, MIXTLY WAS BORN! Let us create a drink for you, based on
                    either your drink type choice <i>(Tea, coffee, etc)</i>, or we'll randomize the whole menu for you. <br />
                    <span id="calltoaction">What would you like to do? </span>
                    <br />
                </span>
                <div class="buttongroup" style={margin}>
                    <Link to="/randomizer">
                        <a class="button is-primary is-medium is-rounded ">Select Drink Type</a>
                    </Link>
                    <a class="button is-info has-text-dark is-medium is-rounded" onClick={() => props.history.push("/results")}>
                        Randomize Menu
                    </a>
                </div>
            </div>
        </main>
    );
}
