import { useMemo, useReducer, useEffect } from "react";
import useUserToken from "./useUserToken";

export default function useFavorite(drink = {}, isFavorite) {
    const [loggedInUser] = useUserToken();
    const favoriteItem = useMemo(
        () =>
            JSON.stringify({
                item: drink,
            }),
        [drink]
    );
    const [state, dispatch] = useReducer(
        (state, action) => {
            if (!loggedInUser) return;
            switch (action) {
                case "FAVORITE":
                    fetch("/api/faves", {
                        method: "PUT",
                        headers: {
                            "Auth-Token": loggedInUser.token,
                            "Content-Type": "application/json",
                        },
                        body: favoriteItem,
                    }).finally(() => dispatch("FINISHED_FAVORITE"));
                    // TODO: Add better error handling
                    return "PROCESSING";
                case "UNFAVORITE":
                    fetch("/api/faves", {
                        method: "DELETE",
                        headers: {
                            "Auth-Token": loggedInUser.token,
                            "Content-Type": "application/json",
                        },
                        body: favoriteItem,
                    }).finally(() => dispatch("FINISHED_UNFAVORITE"));
                    // TODO: Add better error handling
                    return "PROCESSING";
                case "FINISHED_FAVORITE":
                    return "IS_FAVORITE";
                case "FINISHED_UNFAVORITE":
                    return "IS_NOT_FAVORITE";
                default:
                    return "PROCESSING";
            }
        },
        isFavorite !== undefined ? (isFavorite ? "IS_FAVORITE" : "IS_NOT_FAVORITE") : "LOADING"
    );
    useEffect(() => {
        if (isFavorite === undefined) {
            fetch("/api/user", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Auth-Token": loggedInUser.token,
                },
            })
                .then(response => response.json())
                .then(userData => {
                    if (userData) {
                        if (userData.faves.map(favorite => JSON.stringify(favorite)).includes(JSON.stringify(drink))) {
                            dispatch("FINISHED_FAVORITE");
                        } else {
                            dispatch("FINISHED_UNFAVORITE");
                        }
                    }
                });
        }
    }, []);
    return [
        state || "PROCESSING",
        () => {
            if (!state || state === "PROCESSING") return;
            switch (state) {
                case "IS_FAVORITE":
                    dispatch("UNFAVORITE");
                    break;
                case "IS_NOT_FAVORITE":
                    dispatch("FAVORITE");
                    break;
                default:
                    throw new Error("Favoriting toggle state was used incorrectly");
            }
        },
    ];
}
