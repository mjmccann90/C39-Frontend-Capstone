import React, { useContext, useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

import { DogParkContext } from "../park/ParkDataProvider"

import { ReviewContext } from "../reviews/ReviewDataProvider"
import Review from "../reviews/Review"
import "./Review.css"
import AddReviewForm from "../reviews/AddReviewForm"


export default () => {
    const { reviews } = useContext(ReviewContext)
    const { parks } = useContext(DogParkContext)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>

            {/* <div className="fakeLink href" onClick={toggle}>Park Reviews</div> */}
            <Button className="AddReviewForm" color="primary" onClick={() => {
                const userId = localStorage.getItem("dog_owner")
                if (userId) {
                    // If the user is authenticated, show the new review form
                    toggle()
                }


            }}>Add review</Button>

            <div className="reviews">
                <div className="reviewedDogParks">
                    {
                        reviews.map(review => {
                            const dPar = parks.find(dp => dp.id === review.parkId)

                            return <Review key={review.id} dogPark={dPar} review={review} />
                        })
                    }
                </div>
            </div>

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