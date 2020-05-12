import React, { useContext, useRef } from "react"
import { ReviewContext } from "./ReviewDataProvider"
import { DogParkContext } from "../park/ParkDataProvider"
import "./Review.css"

export default props => {
    const { addReview } = useContext(ReviewContext)
    const { parks } = useContext(DogParkContext)

    const reviewTitle = useRef()
    const review_description = useRef()
    const park = useRef()


    const constructNewReview = () => {
        const parkId = parseInt(park.current.value)

        if (parkId === 0) {
            window.alert("Please select a park to review")
        } else {
            addReview({
                reviewTitle: reviewTitle.current.value,
                parkId: parkId,
                review_description: review_description.current.value
            })
                .then(props.toggler)
        }
    }

    return (

        <form className="park_review_form">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="park_review__form_park_title">Park review title: </label>
                    <input
                        type="text"
                        id="park_review__form_reviewTitle"
                        ref={reviewTitle}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Review Title"
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
                        name="park"
                        ref={park}
                        id="park_review__form_location"
                        className="form-control"
                    >
                        <option value="0">Select a park to review</option>
                        {parks.map(e => (
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