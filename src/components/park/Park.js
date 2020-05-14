import React, { useState, useContext } from "react"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import { FavoriteContext } from "../favorite/FavoriteDataProvider"

import { DogParkContext } from "./ParkDataProvider"
import { EditParkForm } from "./EditParkForm"
import "./Park.css"


export const DogPark = ({ dogPark, setActiveList, isFavorite = false }) => {
    const { parks } = useContext(DogParkContext)
    const { addFavorite, deleteFavorite } = useContext(FavoriteContext)
    console.log('addFavorite', addFavorite);

    const [editModal, setEditModal] = useState(false)
    const toggleEdit = () => setEditModal(!editModal)


    // Function to create an object and save it to the API
    const constructNewFavorite = () => {
        const userId = parseInt(localStorage.getItem("dog_owner"))
        // create a new park object
        // Make sure that the park object has the userId foreign key on it.
        const newFavoriteObject = {
            parkId: dogPark.id,
            userId: userId
        }
        addFavorite(newFavoriteObject)
    }


    return (

        < section className="dogPark" >

            <div className="dogPark__park_name">{dogPark.park_name}</div>
            <div className="dogPark__street_address">{dogPark.street_address}</div>
            <div className="dogPark__city">{dogPark.city}</div>
            <div className="dogPark__state">{dogPark.state}</div>


            <Button className="EditParkForm" color="primary" onClick={() => {
                toggleEdit()
            }}>Edit</Button>
            {
                isFavorite
                    ? <Button className="FavoriteButton" color="primary" onClick={() => deleteFavorite(dogPark.id)}>Unfavorite</Button>
                    : <Button className="FavoriteButton" color="primary" onClick={constructNewFavorite}>Favorite</Button>
            }




            <Modal isOpen={editModal} toggle={toggleEdit}>
                <ModalHeader toggle={toggleEdit}>
                    {dogPark.park_name}
                </ModalHeader>
                <ModalBody>

                    <EditParkForm key={dogPark.id} toggleEdit={toggleEdit} dogPark={dogPark} />


                </ModalBody>
            </Modal>
        </section >
    )
}