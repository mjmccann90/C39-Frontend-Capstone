import React, { useContext, useRef } from "react"
import { ReviewContext } from "./ReviewDataProvider"
import { DogParkContext } from "../location/LocationProvider"
import "./Employee.css"

export default props => {
    const { addReview } = useContext(ReviewContext)
    const { park_location } = useContext(DogParkContext)

    const reviewTitle = useRef()
    const review_description = useRef()
    const park_location = useRef()


    const constructNewReview = () => {
        const park_location_Id = parseInt(park_location.current.value)

        if (park_location_Id === 0) {
            window.alert("Please select a park to review")
        } else {
            addReview({
                park_name: park_name.current.value,
                park_location_Id: park_location_Id,
                review_description: review_description.current.value
            })
                .then(props.toggler)
        }
    }

    return (
        // may refactor after mother's day dinner
        <form className="park_review_form">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="park_review__form_park_title">Park review title: </label>
                    <input
                        type="text"
                        id="park_review__form_park_name"
                        ref={reviewTitle}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Park Name"
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="park_review__form_description"> Review Description: </label>
                    <input
                        type="text"
                        id="park_review__form_description"
                        ref={review_description}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Review Description"
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="park_review__form_location">Select a park to review: </label>
                    <select
                        defaultValue=""
                        name="park_location"
                        ref={park_location}
                        id="park_review__form_location"
                        className="form-control"
                    >
                        <option value="0">Select a park to review</option>
                        {park_locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.park_name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewReview()
                    }
                }
                className="btn btn-primary">
                Save Review
            </button>
        </form>
    )
}