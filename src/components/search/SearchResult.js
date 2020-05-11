import React, { useState, useContext, useEffect } from "react"
import { DogParkContext } from "../park/ParkDataProvider"
import { DogPark } from "../park/Park"
//import { FavoriteContext } from "../favorite/FavoriteDataProvider"
import { ReviewContext } from "../reviews/ReviewDataProvider"
import { Modal, ModalHeader, ModalBody, Button, ModalFooter } from "reactstrap"
import { EditParkForm } from "../park/EditParkForm"


export const SearchResults = ({ searchTerms }) => {
    const { parks } = useContext(DogParkContext)
    // const { favorites, removePark } = useContext(FavoriteContext)
    const { reviews, removeReview } = useContext(ReviewContext)


    const [filteredDogParks, setFiltered] = useState([])
    const [selectedDogPark, setDogPark] = useState({
        dogPark: {},
        favorite: null,
        review: null
    })


    // Toggle details modal
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    // Toggle edit modal
    const [editModal, setEditModal] = useState(false)
    const toggleEdit = () => setEditModal(!editModal)

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = parks.filter(dogPark => dogPark.park_name.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else {
            setFiltered([])
        }
    }, [searchTerms, parks])

    return (
        <div className="searchResults">
            <h3>Results</h3>
            <div className="parks">
                {
                    filteredDogParks.map(dogPark => <div
                        className="fakeLink href"
                        onClick={() => {
                            //const favorite = favorites.find(fav => fav.id === dogPark.favoriteId)
                            const review = reviews.find(userReview => userReview.id === dogPark.reviewId)

                            setDogPark({ dogPark, review })
                            toggle()
                        }}
                    >{dogPark.name}</div>)
                }
            </div>

            <Modal isOpen={editModal} toggle={toggleEdit}>
                <ModalHeader toggle={toggleEdit}>
                    {selectedDogPark.dogPark.park_name}
                </ModalHeader>
                <ModalBody>
                    <EditParkForm key={selectedDogPark.dogPark.id} toggleEdit={toggleEdit} {...selectedDogPark} />
                </ModalBody>
            </Modal>


            {/* Add in edit forms for favorites and reviews */}

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    {selectedDogPark.dogPark.park_name}
                </ModalHeader>
                <ModalBody>
                    <DogPark key={selectedDogPark.dogPark.id} {...selectedDogPark} />
                </ModalBody>
                <ModalFooter>
                    <Button color="info" onClick={() => {
                        toggle()
                        toggleEdit()
                    }}>Edit</Button>
                    {/* add in delete buttons for review and favorite dogPark */}
                </ModalFooter>
            </Modal>
        </div>
    )
}
