import React, { useContext, useState } from "react"
//import { Button } from "reactstrap"
import { DogParkContext } from "../park/ParkDataProvider"
import { FavoriteContext } from "../favorite/FavoriteDataProvider"
import { DogPark } from "../park/Park"
import "./Favorite.css"

export const FavoriteList = ({ setActiveList }) => {
    const { favorites } = useContext(FavoriteContext)
    console.log('favorites', favorites);

    const { parks } = useContext(DogParkContext)
    console.log('parks', parks);



    return (
        <>

            <div className="favorites"></div>
            <div className="favoriteDogParks">
                {
                    favorites.map(favorite => {

                        return <DogPark key={favorite.id} dogPark={favorite} isFavorite={true} setActiveList={setActiveList} />
                    })
                }
            </div>


        </>
    )
}