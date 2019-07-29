import React from "react";
import { Link } from "react-router-dom";

const margin = {
    marginTop: "15px",
};
export default function SplashPage(props) {
    // const [redirect, setRedirect] = useState("");
    return (
        <main>
            <div class="bg" />
            <div class="column is-12-mobile is-4-desktop is-offset-4-desktop has-text-centered" id="divleft">
                <span id="mixtly"> MIXTLY</span>
                <br />
                <span id="splash-font">
                    Like Dutch Bros? Us too. <br />
                    Sometimes we dont always know what we want, though! The menu is so vast, deciding can be overwhelming.
                    Especially if you haven't been there!
                    <br /> Thus, MIXTLY WAS BORN! Let us create a drink for you, based on either your drink type choice{" "}
                    <i>(Tea, coffee, etc)</i>, or we'll randomize the whole menu for you. <br />
                    <br />
                </span>
                <span id="calltoaction">WHAT WOULD YOU LIKE TO DO? </span>
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
