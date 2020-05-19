import React, { useState, useEffect } from "react"
import { Button } from "reactstrap"

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

import Logo from "../src/components/images/615PupParks.png"

import "./components/Layout.css"

export const Dashboard = () => {
    const [searchTerms, setTerms] = useState(null)
    const [activeList, setActiveList] = useState("allTheDogParks")
    const [components, setComponents] = useState()

    const showDogParks = () => <ParkList setActiveList={setActiveList} />
    const showReviewedDogParks = () => <ReviewList />
    const showFavoriteDogParks = () => <FavoriteList />

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
            <div className="links">
                <div className="link-items">
                    <div><img className="logo" src={Logo}></img></div>
                    <div className="nav-link">
                        <div className="app_views">
                            <div className="fakeLink href test" onClick={() => setActiveList("allTheDogParks")}>All Dog Parks</div>
                            < div className="fakeLink href test" onClick={() => setActiveList("favoriteDogParks")}> Favorite Parks</div >
                            < div className="fakeLink href test" onClick={() => setActiveList("reviewedDogParks")}> Reviewed Parks</div >
                            <div className="fakeLink href test" onClick={() => {
                                localStorage.clear()
                                window.location.reload()
                            }}>Logout</div>
                        </div>
                    </div>
                </div>
            </div >


            <ParkDataProvider>
                <FavoriteDataProvider>
                    <ReviewDataProvider>
                        <div className="searchContainer">

                            <SearchBar setTerms={setTerms} />
                            <SearchResults searchTerms={searchTerms} />

                        </div>
                        <div className="dataContainer">

                            <div className="listContainer">
                                <div className="listDisplay">
                                    {components}
                                </div >
                            </div >

                        </div >
                    </ReviewDataProvider>
                </FavoriteDataProvider>
            </ParkDataProvider>
        </div >
    )

}

