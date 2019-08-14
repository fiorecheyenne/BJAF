import React, { useState, useEffect, useMemo } from "react";
import DrinkCard from "../shared/DrinkCard";

const centerConstraints = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // minHeight: "calc(100vh - 70px)",
};

const buttonPadding = {
    padding: "0px",
    margin: "0px",
};

const cardProps = {
    position: "relative",
    top: "10vh",

    left: "50vh",
};
export default function ResultsPage(props) {
    const [result, setResult] = useState(null);
    const params = useMemo(() => {
        let params = {};
        props.location.search
            .split(/[\?&]/)
            .filter(s => s !== "")
            .forEach(s => {
                let [key, value] = s.split("=");
                params[key] = value;
            });
        return params;
    }, [props.location.search]);

    const [refetch, setRefetch] = useState(true);

    useEffect(() => {
        if (refetch) {
            setRefetch(false);
            const { base } = params;
            fetch(base ? "/api/randomizer?base=" + base : "/api/randomizer")
                .then(res => res.json())
                .then(result => {
                    let generatedResult = result;
                    if (generatedResult.milk === "none") {
                        generatedResult.milk = undefined;
                    }
                    if (generatedResult.variation === "none") {
                        generatedResult.variation = undefined;
                    }
                    setResult(generatedResult);
                })
                .catch(error => {
                    console.warn(error);
                });
        }
    }, [refetch]);

    return (
        <main>
            <div class="resultbg" />
            <div class="title is-2 has-text-centered" id="resultheader">
                YOUR DRINK
            </div>
            <div style={centerConstraints} id="resultdiv">
                {result && <DrinkCard style={cardProps} {...result} />}
            </div>

            <div class="column is-full is-mobile has-text-centered" style={buttonPadding}>
                <button class="button is-primary is-rounded" id="randomizeagainbutton" onClick={() => setRefetch(true)}>
                    Randomize again
                </button>
            </div>

            <div class="column is-full is-mobile has-text-centered" style={buttonPadding}>
                <button
                    class="button is-info has-text-dark is-rounded"
                    id="newbasebutton"
                    onClick={() => props.history.push("/randomizer")}>
                    Pick a new base
                </button>
            </div>
        </main>
    );
}
