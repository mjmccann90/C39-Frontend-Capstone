// When we use Employee component in EmployeeList, React takes the keys passed
// to the Employee component and puts it into one object

import React, { useState, useContext } from "react"
import { Modal, ModalHeader, ModalBody } from "reactstrap"
import { ReviewContext } from "../reviews/ReviewDataProvider"

export default ({ review, dogPark }) => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const { deleteReview } = useContext(ReviewContext)

    return (
        <>
            <li>
                <span className="fakeLink href" onClick={toggle}>{review.reviewTitle}</span>
                <span className="fakeLink icon--delete" onClick={() => {
                    deleteReview(review)
                }}>🗑</span>
            </li>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    {review.reviewTitle}
                </ModalHeader>
                <ModalBody>
                    <div className="dog__park_name">
                        <label className="label--review">Park name:</label> {dogPark.parkId}
                    </div>
                    <div className="dog__park_description">
                        <label className="label--review">Review note</label> {review.decription}
                    </div>
                </ModalBody>
            </Modal>
        </>
    )
}