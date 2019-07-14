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
                setResult(generatedResult);
            })
            .catch(error => {
                console.warn(error);
            });
    }, []);

    return <main>{result && <DrinkCard id="resultcard" {...result} />}</main>;
}
