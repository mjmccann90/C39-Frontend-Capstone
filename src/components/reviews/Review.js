// When we use Employee component in EmployeeList, React takes the keys passed
// to the Employee component and puts it into one object

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
            <div className="review__title">{review.reviewTitle}</div>
            <div className="review__review_description">{review.review_description}</div>
            <div className="dogPark__park_name">{dogPark.park_name}</div>

            <span className="fakeLink icon--delete" onClick={() => {
                deleteReview(review)
            }}>🗑</span>


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