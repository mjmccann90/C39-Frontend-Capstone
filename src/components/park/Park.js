import React, { useState } from "react"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"


import { DogParkContext } from "./ParkDataProvider"
import { EditParkForm } from "./EditParkForm"
import "./Park.css"


export const DogPark = ({ dogPark }) => {
    // const { updatePark } = useContext(DogParkContext)
    const [editModal, setEditModal] = useState(false)
    const toggleEdit = () => setEditModal(!editModal)

    return (

        < section className="dogPark" >

            <div className="dogPark__park_name">{dogPark.park_name}</div>
            <div className="dogPark__street_address">{dogPark.street_address}</div>
            <div className="dogPark__city">{dogPark.city}</div>
            <div className="dogPark__state">{dogPark.state}</div>

            <Button className="EditParkForm" color="primary" onClick={() => {
                toggleEdit()
            }}>Edit</Button>
            <Button className="FavoriteButton">Favorite</Button>

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