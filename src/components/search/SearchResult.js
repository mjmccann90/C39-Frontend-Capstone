import React, { useState, useContext, useEffect } from "react"
import { DogParkContext } from "../park/ParkDataProvider"
// import { Animal } from "../animal/Animal"
import { FavoriteContext } from "../favorite/FavoriteDataProvider"
import { ReviewContext } from "../reviews/ReviewDataProvider"
import { Modal, ModalHeader, ModalBody, Button, ModalFooter } from "reactstrap"
// import { EditAnimalForm } from "../animal/EditAnimalForm"


export const SearchResults = ({ searchTerms }) => {
    const { dogParks } = useContext(DogParkContext)
    const { favorites, removePark } = useContext(FavoriteContext)
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
            const subset = dogParks.filter(dogPark => dogPark.name.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else {
            setFiltered([])
        }
    }, [searchTerms, dogParks])

    return (
        <div className="searchResults">
            <h3>Results</h3>
            <div className="dogParks">
                {
                    filteredDogParks.map(dogPark => <div
                        className="fakeLink href"
                        onClick={() => {
                            const favorite = favorites.find(fav => fav.id === dogPark.favoriteId)
                            const review = reviews.find(userReview => userReview.id === dogPark.reviewId)

                            setDogPark({ dogPark, favorite, review })
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
                    {selectedDogPark.dogPark.name}
                </ModalHeader>
                <ModalBody>
                    <Animal key={selectedAnimal.dogPark.id} {...selectedDogPark} />
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
