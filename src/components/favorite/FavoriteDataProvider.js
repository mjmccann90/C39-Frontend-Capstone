import React, { useState, useEffect, useContext } from "react"
import { DogParkContext } from "../park/ParkDataProvider"
/*
    The context is imported and used by individual components
    that need data
*/
export const FavoriteContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const FavoriteDataProvider = (props) => {
    const { parks } = useContext(DogParkContext)
    console.log('parks', parks);

    // favorites = data
    // setfavorites = function that React created, so we can use it to set state of favorites
    const [favorites, setFavorites] = useState([])

    const getFavorites = () => {
        return fetch("http://localhost:8088/favorites")
            .then(res => res.json())
            .then(faves => {
                if (parks && parks.length > 0) {
                    //condition avoids the raised condition
                    const f = faves.map(fave => {
                        const dogPark = parks.find(park => park.id === fave.parkId)
                        console.log('dogPark', dogPark);

                        const favePark = {
                            ...fave,
                            park_name: dogPark.park_name,
                            street_address: dogPark.street_address,
                            city: dogPark.city,
                            state: dogPark.state
                        }
                        return favePark
                    })
                    console.log('f', f);
                    return f
                } else {
                    return []
                }
            })
            .then(setFavorites)
    }

    const addFavorite = favorite => {
        return fetch("http://localhost:8088/favorites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(favorite)
        })
            .then(getFavorites)
    }

    const deleteFavorite = favoriteId => {
        return fetch(`http://localhost:8088/favorites/${favoriteId}`, {
            method: "DELETE"
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
                deleteFavorite
            }
        }>
            {props.children}
        </FavoriteContext.Provider>
    )
}