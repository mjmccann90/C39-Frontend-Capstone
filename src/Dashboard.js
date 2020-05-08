import React, { useState, useEffect } from "react"
import { ParkDataProvider } from "../src/components/park/ParkDataProvider"
import { ParkList } from "../src/components/park/ParkList"
import { FavoriteDataProvider } from "./components/favorites/FavoriteDataProvider"

import { FavoriteDataProvider } from "../src/components/favorites/FavoriteDataProvider"
import { FavoriteList } from "../src/components/favorites/FavoriteList"

import "./Layout.css"

export const Dashboard = () => {
    const [activeList, setActiveList] = useState("allTheDogParks")
    const [components, setComponents] = useState()

    const showDogParks = () => (
        <ParkDataProvider>
            <ParkList />
        </ParkDataProvider>
    )
    const showFavoriteDogParks = () => (
        <ParkDataProvider>
            <FavoriteDataProvider>
                <FavoriteList />
            </FavoriteDataProvider>
        </ParkDataProvider >
    )

    /*
        This effect hook determines which list is shown
        based on the state of the `activeList` variable.
    */
    useEffect(() => {
        if (activeList === "allTheDogParks") {
            setComponents(showDogParks)
        }
        else if (activeList === "favoriteDogParks") {
            setComponents(showFavoriteDogParks)
        }
    }, [activeList])


    return (
        <div className="mainContainer">
            {/* Search is a strech 👇🏻 */}
            {/* <div className="searchContainer">
                    <ParkDataProvider>
                        <FavoriteDataProvider>>

                            <SearchBar setTerms={setTerms} />
                            <SearchResults searchTerms={searchTerms} />

                        </FavoriteDataProvider>
                    </ParkDataProvider>
                </div> */}
            <div className="dataContainer">
                <div className="listContainer">
                    <div className="links">
                        <div className="fakeLink href" onClick={() => setActiveList("allTheDogParks")}>All the Dog Parks</div>
                        < div className="fakeLink href" onClick={() => setActiveList("favoriteDogParks")}> Favorite Parks</div >
                    </div >
                    <div className="listDisplay">
                        {components}
                    </div >
                </div >

            </div >
        </div >
    )

}

