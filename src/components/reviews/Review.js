// When we use Review component in ReviewList, React takes the keys passed
// to the Review component and puts it into one object

import React, { useState, useContext } from "react"
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap"
import { ReviewContext } from "../reviews/ReviewDataProvider"
import { DogParkContext } from "../park/ParkDataProvider"
import "./Review.css"

export default ({ dogPark, review }) => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    const { park } = useContext(DogParkContext)
    const { deleteReview } = useContext(ReviewContext)

    return (

        < section className="review" >
            <div className="review__title"><h3>{review.reviewTitle}</h3></div>
            <div className="review__review_description"><p>{review.review_description}</p></div>
            <div className="dogPark__park_name"><p>{dogPark.park_name}</p></div>

            <Button color="danger" onClick={() => {
                deleteReview(review.id)
                toggle()
            }}>Delete</Button>


            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    {review.reviewTitle}
                </ModalHeader>
                <ModalBody>
                    <div className="dog__park_name">
                        <label className="label--review">Park name:</label> {dogPark.id}
                    </div>
                    <div className="dog__park_description">
                        <label className="label--review">Review note</label> {review.decription}
                    </div>
                </ModalBody>
            </Modal>

        </ section>
    )
}