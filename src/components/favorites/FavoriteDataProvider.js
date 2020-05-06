import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const FavoriteContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const FavoriteDataProvider = (props) => {
    // favorites = data
    // setfavorites = function that React created, so we can use it to set state of favorites
    const [favorites, setFavorites] = useState([])

    const getFavorites = () => {
        return fetch("http://localhost:8088/favorites")
            .then(res => res.json())
            .then(setFavorites)
    }

    const addFavorite = favorites => {
        return fetch("http://localhost:8088/favorites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(favorites)
        })
            .then(getFavorites)
    }

    const updateFavorite = favorite => {
        return fetch(`http://localhost:8088/favorites/${favorites.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(favorite)
        })
            .then(getFavorites)
    }



    /*
        Load all favorites when the component is initialized. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getFavorites()
    }, [])

    return (
        <FavoriteContext.Provider value={
            {
                favorites,
                addFavorite,
                updateFavorite
            }
        }>
            {props.children}
        </FavoriteContext.Provider>
    )
}