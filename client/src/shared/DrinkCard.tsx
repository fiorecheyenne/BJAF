import React, { useMemo, CSSProperties } from "react";
import useFavorite from "../hooks/useFavorite";
import IconButton from "./IconButton";

type DrinkCardProps = {
    base: any;
    preset: any;
    flavors: any;
    milk: any;
    variation: any;
    isFavorite: any;
};

const constraints: CSSProperties = {
    maxWidth: "300px",
    position: "relative",
    // top: "1px",
    margin: "1rem",
    display: "block",
};

const centerContainer: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "12px",
};

const favoritesButton: CSSProperties = {
    position: "absolute",
    right: "0",
    top: "0",
    transform: "translate(-28%, 28%)",
};

const imageSize: CSSProperties = {
    minWidth: "200px",
    maxHeight: "220px",
};

export default function DrinkCard({ base, preset, flavors, milk, variation, isFavorite }: DrinkCardProps) {
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
    const imgName = useMemo(() => {
        const baseWords = base.toLowerCase().split(" ");
        return baseWords[baseWords.length - 1];
    }, [base]);
    return (
        <div className="drink box" style={constraints}>
            {base && (
                <div style={centerContainer}>
                    <img src={`/image/${imgName}.png`} alt={base + " drink"} style={imageSize} />
                </div>
            )}
            <hr />
            <h3 className="is-size-5">
                <strong>{variation ? `${variation} ${base}` : base}</strong>
            </h3>
            <hr />
            {flavors && (
                <>
                    <p>
                        <strong>Flavors</strong>:
                    </p>
                    {flavors.map((flavor: string, key: number) => (
                        <p key={key}> + {flavor}</p>
                    ))}
                </>
            )}
            {preset && (
                <>
                    <p>
                        <strong>Drink</strong>:
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
                <IconButton icon="heart" extras={buttonDisplayState} onClick={() => toggleFavorite()} />
            </div>
        </div>
    );
}