// When we use Employee component in EmployeeList, React takes the keys passed
// to the Employee component and puts it into one object

import React, { useState, useContext } from "react"
import { Modal, ModalHeader, ModalBody } from "reactstrap"
import { ReviewContext } from "../reviews/ReviewDataProvider"
import { DogParkContext } from "../park/ParkDataProvider"

export default ({ park, review }) => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    const { park } = useContext(DogParkContext)
    const { deleteReview } = useContext(ReviewContext)

    return (
        <>
            <li>
                <span className="fakeLink href" onClick={toggle}>{review.reviewTitle}</span>
                <span className="fakeLink icon--delete" onClick={() => {
                    deleteReview(review)
                }}>🗑</span>

                <Button className="AddReviewForm" color="primary" onClick={() => {
                    toggleEdit()
                }}>Add review</Button>
            </li>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    {review.reviewTitle}
                </ModalHeader>
                <ModalBody>
                    <div className="dog__park_name">
                        <label className="label--review">Park name:</label> {park.id}
                    </div>
                    <div className="dog__park_description">
                        <label className="label--review">Review note</label> {review.decription}
                    </div>
                </ModalBody>
            </Modal>
        </>
    )
}