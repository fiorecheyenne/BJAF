import React, { useState, useEffect } from "react";
import DrinkCard from "../shared/DrinkCard";

export default function ResultsPage(props) {
    const [result, setResult] = useState(null);
    const { base } = props.location;

    useEffect(() => {
        console.log(props.location);
        let params = {};
        props.location.search
            .split(/[\?&]/)
            .filter(s => s !== "")
            .forEach(s => {
                let [key, value] = s.split("=");
                params[key] = value;
            });
        const { base } = params;
        fetch(base ? "/api/randomizer?base=" + base : "/api/randomizer")
            .then(res => res.json())
            .then(result => {
                console.log(result);
                const Results = {
                    base: result.randomizedBase,
                    flavor: result.randomizedFlavor,
                    milk: result.randomizedMilk,
                    variation: result.randomizedVariation,
                };
                setResult(Results);
                console.log("base: " + Results.base);
                console.log("flavor: " + Results.flavor);
                console.log("Suggested milk: " + Results.milk);
                console.log("variation: " + Results.variation);
            })
            .catch(error => {
                console.warn(error);
            });
    }, []);

    return <main>{result && <DrinkCard id="resultcard" {...result} />}</main>;
}
