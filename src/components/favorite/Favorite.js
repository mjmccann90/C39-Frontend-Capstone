import React, { useState } from "react"
//import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import { FavoriteContext } from "./FavoriteDataProvider"
import { DogParkContext } from "../park/ParkDataProvider"
import "./Favorite.css"

export const Favorite = ({ dogPark, favorite }) => {
    const { park } = useContext(DogParkContext)
    const { addFavorite } = useContext(FavoriteContext)
    return (

        < section className="favorite" >
            <div className="dogPark__favorite_park_name"><h3>{dogPark.park_name}</h3></div>
            <div className="dogPark__favorite_street_address"><p>{dogPark.street_address}</p></div>
            <div className="dogPark__city"><p>{dogPark.city}</p></div>
            <div className="dogPark__state"><p>{dogPark.state}</p></div>
            <div className="dogPark__favoriteId"><p>{favorite.favoriteId}</p></div>

        </section >
    )
}