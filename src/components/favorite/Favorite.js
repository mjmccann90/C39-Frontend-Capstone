import React, { useState } from "react"
//import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import { FavoriteContext } from "./FavoriteDataProvider"
import { DogParkContext } from "../park/ParkDataProvider"
import "./Favorite.css"

export const Favorite = ({ dogPark }) => {
    const { park } = useContext(DogParkContext)
    const { addFavorite } = useContext(FavoriteContext)
    return (

        < section className="dogPark__Favorites" >
            <div className="dogPark__favorite_park_name">{dogPark.park_name}</div>
            <div className="dogPark__favorite_street_address">{dogPark.street_address}</div>
            <div className="dogPark__city">{dogPark.city}</div>
            <div className="dogPark__state">{dogPark.state}</div>

        </section >
    )
}