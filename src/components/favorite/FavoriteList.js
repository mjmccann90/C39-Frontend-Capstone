import React, { useContext, useState } from "react"
//import { Button } from "reactstrap"
import { DogParkContext } from "../park/ParkDataProvider"
import { FavoriteContext } from "../favorite/FavoriteDataProvider"
import { DogPark } from "../park/Park"
import "./Favorite.css"

export const FavoriteList = ({ setActiveList }) => {
    const { favorites } = useContext(FavoriteContext)
    const { parks } = useContext(DogParkContext)


    return (
        <>

            <div className="favorites"></div>
            <div className="favoriteDogParks">
                {
                    favorites.map(favorite => {
                        const dPar = parks.find(dp => dp.id === favorite.parkId)

                        return <DogPark key={favorite.id} dogPark={dPar} favorite={favorite} setActiveList={setActiveList} />
                    })
                }
            </div>


        </>
    )
}