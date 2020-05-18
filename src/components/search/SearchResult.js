import React, { useState, useContext, useEffect } from "react"

import { DogParkContext } from "../park/ParkDataProvider"
import { DogPark } from "../park/Park"

export const SearchResults = ({ searchTerms }) => {
    const { parks } = useContext(DogParkContext)
    const [filteredParks, setFiltered] = useState([])

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = parks.filter(park => park.park_name.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else {
            setFiltered([])
        }
    }, [searchTerms, parks])

    return (
        <div className="searchResults">
            <h3>Results</h3>
            <div className="parks">
                {
                    filteredParks.map(park => <div key={park.id}>{park.park_name}</div>)
                }
            </div>
        </div>
    )
}