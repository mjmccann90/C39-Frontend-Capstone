import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const DogParkContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const ParkDataProvider = (props) => {
    // parks = data
    // setparks = function that React created, so we can use it to set state of parks
    const [parks, setParks] = useState([])

    const getParks = () => {
        return fetch("http://localhost:8088/dogParks")
            .then(res => res.json())
            .then(setParks)
    }

    const addPark = park => {
        return fetch("http://localhost:8088/dogParks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(park)
        })
            .then(getParks)
    }

    // const updatePark = park => {
    //     return fetch(`http://localhost:8088/dogParks/${dogPark.id}`, {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(park)
    //     })
    //         .then(getParks)
    // }

    /*
        Load all parks when the component is initialized. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getParks()
    }, [])

    return (
        <DogParkContext.Provider value={
            {
                parks,
                addPark,
                // updatePark
            }
        }>
            {props.children}
        </DogParkContext.Provider>
    )
}