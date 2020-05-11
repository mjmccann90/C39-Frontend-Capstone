import React, { useContext } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

import { DogParkContext } from "../park/ParkDataProvider"

import { ReviewContext } from "../reviews/ReviewDataProvider"
import Review from "../reviews/Review"
import "../reviews/Review.css"
import AddReviewForm from "../reviews/AddReviewForm"


export default () => {
    const { reviews } = useContext(ReviewContext)
    const { dogParks } = useContext(DogParkContext)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>
            <h2>Reviews</h2>

            <div className="fakeLink href" onClick={toggle}>Park Reviews</div>

            <ul className="reviews">
                {
                    reviews.map(review => {
                        const dPar = dogParks.find(dp => dp.id === review.locationId)

                        return <Review key={review.id} location={dPar} review={review} />
                    })
                }
            </ul>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    New Review
                </ModalHeader>
                <ModalBody>
                    <EmployeeForm toggler={toggle} />
                </ModalBody>
            </Modal>
        </>
    )
}