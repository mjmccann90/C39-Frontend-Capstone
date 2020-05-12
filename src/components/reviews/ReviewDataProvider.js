import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const ReviewContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const ReviewDataProvider = (props) => {
    // parks = data
    // setparks = function that React created, so we can use it to set state of parks
    const [reviews, setReviews] = useState([])

    const getReviews = () => {
        return fetch("http://localhost:8088/reviews")
            .then(res => res.json())
            .then(setReviews)
    }

    const addReview = review => {
        return fetch("http://localhost:8088/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(getReviews)
    }

    const deleteReview = reviewId => {
        return fetch(`http://localhost:8088/reviews/${reviewId}`, {
            method: "DELETE"
        })
            .then(getReviews)
    }

    /*
        Load all reviews when the component is initialized. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getReviews()
    }, [])

    return (
        <ReviewContext.Provider value={
            {
                reviews,
                addReview,
                deleteReview
            }
        }>
            {props.children}
        </ReviewContext.Provider>
    )
}