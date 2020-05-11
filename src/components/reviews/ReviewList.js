import React, { useContext, useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

import { DogParkContext } from "../park/ParkDataProvider"

import { ReviewContext } from "../reviews/ReviewDataProvider"
import Review from "../reviews/Review"
import "../reviews/Review.css"
import AddReviewForm from "../reviews/AddReviewForm"


export default () => {
    const { reviews } = useContext(ReviewContext)
    const { parks } = useContext(DogParkContext)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>
            <h2>Reviews</h2>

            <div className="fakeLink href" onClick={toggle}>Park Reviews</div>

            <ul className="reviews">
                {
                    reviews.map(review => {
                        const dPar = parks.find(dp => dp.id === review.parkId)

                        return <Review key={review.id} park={dPar} review={review} />
                    })
                }
            </ul>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    New Review
                </ModalHeader>
                <ModalBody>
                    <AddReviewForm toggler={toggle} />
                </ModalBody>
            </Modal>
        </>
    )
}