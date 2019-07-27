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
                    let generatedResult = {
                        base: result.randomizedBase,
                        milk: result.randomizedMilk,
                        variation: result.randomizedVariation,
                    };
                    if (typeof result.randomizedFlavor === "string") {
                        generatedResult = {
                            ...generatedResult,
                            preset: result.randomizedFlavor,
                        };
                    } else {
                        generatedResult = {
                            ...generatedResult,
                            flavors: result.randomizedFlavor,
                        };
                    }
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
            <p class="title is-2 has-text-centered" id="resultheader">
                YOUR DRINK:
            </p>
            <div style={centerConstraints}>{result && <DrinkCard id="resultcard" {...result} />}</div>

            <div class="column is-full is-mobile has-text-centered" style={buttonPadding}>
                <button class="button is-primary" id="randomizeagainbutton" onClick={() => setRefetch(true)}>
                    Nah, try again
                </button>
            </div>

            <div class="column is-full is-mobile has-text-centered">
                <button class="button is-primary " id="newbasebutton" onClick={() => props.history.push("/randomizer")}>
                    Pick a new base
                </button>
            </div>
        </main>
    );
}
