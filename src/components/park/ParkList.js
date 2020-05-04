import React, { useContext } from "react"
import { DogParkContext } from "./ParkDataProvider"
import { DogPark } from "../park/Park"
import "./Park.css"

export const ParkList = () => {
    const { parks } = useContext(DogParkContext) || []

    return (
        <div className="allTheDogParks">
            {
                parks.map(dogP => <DogPark key={dogP.id} dogPark={dogP} />)
            }
        </div>
    )
}