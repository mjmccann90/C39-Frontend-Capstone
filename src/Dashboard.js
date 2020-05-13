import React, { useState, useEffect } from "react"

import { ParkDataProvider } from "../src/components/park/ParkDataProvider"
import { ParkList } from "../src/components/park/ParkList"
import "../src/components/park/Park.css"


import { FavoriteDataProvider } from "../src/components/favorite/FavoriteDataProvider"
import { FavoriteList } from "./components/favorite/FavoriteList"
import "../src/components/favorite/Favorite.css"

import { ReviewDataProvider } from "../src/components/reviews/ReviewDataProvider"
import ReviewList from "../src/components/reviews/ReviewList"
import "../src/components/reviews/Review.css"

import { SearchBar } from "../src/components/search/Searchbar"
import { SearchResults } from "../src/components/search/SearchResult"

import "./components/Layout.css"

export const Dashboard = () => {
    const [searchTerms, setTerms] = useState(null)
    const [activeList, setActiveList] = useState("allTheDogParks")
    const [components, setComponents] = useState()

    const showDogParks = () => (
        <ParkDataProvider>
            <ParkList setActiveList={setActiveList} />
        </ParkDataProvider>
    )
    const showReviewedDogParks = () => (
        <ParkDataProvider>
            <ReviewDataProvider>
                <ReviewList />
            </ReviewDataProvider>
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
        else if (activeList === "reviewedDogParks") {
            setComponents(showReviewedDogParks)
        }
        else if (activeList === "favoriteDogParks") {
            setComponents(showFavoriteDogParks)
        }

    }, [activeList])


    return (
        <div className="mainContainer">
            <div className="searchContainer">
                <ParkDataProvider>
                    {/* <FavoriteDataProvider> */}
                    <ReviewDataProvider>

                        <SearchBar setTerms={setTerms} />
                        <SearchResults searchTerms={searchTerms} />

                    </ReviewDataProvider>
                    {/* </FavoriteDataProvider> */}
                </ParkDataProvider>
            </div>
            <div className="dataContainer">
                <div className="listContainer">
                    <div className="links">
                        <div className="fakeLink href" onClick={() => setActiveList("allTheDogParks")}>All the Dog Parks</div>
                        < div className="fakeLink href" onClick={() => setActiveList("favoriteDogParks")}> Favorite Parks</div >
                        < div className="fakeLink href" onClick={() => setActiveList("reviewedDogParks")}> Reviewed Parks</div >
                    </div >
                    <div className="listDisplay">
                        {components}
                    </div >
                </div >

            </div >
        </div >
    )

}

