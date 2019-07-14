import React, { useMemo } from "react";
import useFavorite from "../hooks/useFavorite";
import IconButton from "../shared/IconButton";

const constraints = {
    width: "350px",
    position: "relative",
    top: "20vh",
    left: "38vw",
    margin: "25px",
};

const centerContainer = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "12px",
};

const favoritesButton = {
    position: "absolute",
    right: "0",
    top: "0",
    transform: "translate(-28%, 28%)",
};

export default function DrinkCard({ base, preset, flavors, milk, variation, img, isFavorite }) {
    const [favorite, toggleFavorite] = useFavorite(
        {
            base,
            preset,
            flavors,
            milk,
            variation,
        },
        isFavorite
    );
    const buttonDisplayState = useMemo(() => {
        switch (favorite) {
            case "PROCESSING":
                return "is-disabled is-loading";
            case "IS_FAVORITE":
                return "is-primary";
            case "IS_NOT_FAVORITE":
                return "is-primary is-inverted";
            case "LOADING":
                return "is-hidden";
            default:
                return "is-disabled";
        }
    }, [favorite]);
    return (
        <div className="drink box" style={constraints}>
            <div style={centerContainer}>
                <img src={img} alt={base + " drink"} />
            </div>
            <hr />
            <h3 className="is-size-5">
                <strong>{variation ? `${variation} ${base}` : base}</strong>
            </h3>
            <hr />
            {flavors && <p>{flavors.join(", ")}</p>}
            {preset && (
                <>
                    <p>
                        <strong>Chosen Drink</strong>
                    </p>
                    <p>{preset}</p>
                </>
            )}
            {milk && (
                <>
                    <br />
                    <div className="control">
                        <div className="tags has-addons">
                            <span className="tag is-light">Suggested Milk</span>
                            <span className="tag is-primary">{milk}</span>
                        </div>
                    </div>
                </>
            )}
            <div style={favoritesButton}>
                <IconButton icon="heart" extras={buttonDisplayState} onClick={toggleFavorite} />
            </div>
        </div>
    );
}
