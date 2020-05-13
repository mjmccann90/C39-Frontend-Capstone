import React, { useContext, useRef } from "react"
import { DogParkContext } from "./ParkDataProvider"

import { FavoriteContext } from "../favorite/FavoriteDataProvider"

import "./Favorite.css"


const { addFavorite } = useContext(FavoriteContext)

// Function to create an object and save it to the API
const constructNewFavorite = () => {
    const userId = parseInt(localStorage.getItem("dog_owner"))
    // create a new park object
    // Make sure that the park object has the userId foreign key on it.
    const newFavoriteObject = {
        parkId: parkId,
        reviewId: reviewId,
        userId: userId
    }
    addFavorite(newFavoriteObject).then(props.toggler)
}

