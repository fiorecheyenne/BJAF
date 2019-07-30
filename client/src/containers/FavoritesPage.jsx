import React, { useState, useEffect } from "react";
import DrinkCard from "../shared/DrinkCard";
import useUserToken from "../hooks/useUserToken";

export default function FavoritesPage() {
    const [token] = useUserToken();
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        if (token && token.token) {
            fetch("/api/user", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Auth-Token": token.token.token,
                },
            })
                .then(response => response.json())
                .then(data => {
                    if (data && data.faves) {
                        setFavorites(data.faves);
                    }
                });
        } else {
            // Show signup modal
        }
    }, [token]);
    return (
        <div id="favoritesbg">
            <div className="section">
                <div className="columns is-multiline">
                    {favorites.map((favorite, key) => (
                        <div className="column is-narrow is-paddingless">
                            <DrinkCard
                                isFavorite
                                key={key}
                                base={favorite.base}
                                preset={favorite.preset}
                                flavors={favorite.flavors}
                                milk={favorite.milk}
                                img={"https://files.dutchbros.com/website/menu/drink-images/Americano_Americano_Hot.png"}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
