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
            <div class="column is-12-mobile is-12-desktop  has-text-centered" id="divleft">
                <span id="mixtly"> MIXTLY</span>
                <br />
                <div id="splash-font" class="column is-12-mobile  has-text-centered  ">
                    Mixtly is your go-to app for creating new and exciting drink options for your favorite coffee spot: Dutch
                    Bros. Start by choosing your favorite type and let us take care of the rest, or if you’re feeling
                    particularly bold create a completely randomized drink.
                </div>

                <span id="calltoaction">WHAT WOULD YOU LIKE TO DO? </span>
                <div class="buttongroup" style={margin}>
                    <Link to="/randomizer">
                        <a class="button is-primary is-medium is-rounded is-mobile" id="drinktype">
                            Pick Drink Type
                        </a>
                    </Link>
                    <br />
                    <a
                        class="button is-info has-text-dark is-medium is-rounded is-mobile"
                        id="randomizeall"
                        onClick={() => props.history.push("/results")}>
                        Randomize All
                    </a>
                </div>
            </div>
        </main>
    );
}
