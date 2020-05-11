import React, { useContext, useState } from "react"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"

import { DogParkContext } from "./ParkDataProvider"
import AddParkForm from "./AddParkForm"
import { DogPark } from "../park/Park"
import "./Park.css"

export const ParkList = () => {
    const { parks } = useContext(DogParkContext) || []

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>
            <Button onClick={() => {
                // check if the user is authenticated
                const userId = localStorage.getItem("dog_owner")
                if (userId) {
                    // If the user is authenticated, show the new park form
                    toggle()
                }
            }}>Add a New Park</Button>
            <div className="dogParks"></div>
            <div className="allTheDogParks">
                {
                    parks.map(dogP => <DogPark key={dogP.id} dogPark={dogP} />)
                }
            </div>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    New Park
                </ModalHeader>
                <ModalBody>
                    <AddParkForm toggler={toggle} />
                </ModalBody>
            </Modal>

        </>
    )
}