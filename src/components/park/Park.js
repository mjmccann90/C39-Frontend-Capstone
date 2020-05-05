import React, { useContext, useState } from "react"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import React from "react"

import { DogParkContext } from "./ParkDataProvider"
import { EditParkForm } from "./EditParkForm"
import "./Park.css"


export default (props) => {
    const { updatePark } = useContext(DogParkContext)

    const [editModal, setEditModal] = useState(false)
    const toggleEdit = () => setEditModal(!editModal)
}


return (
    <>
        < section className="dogPark" >
            <div className="dogPark__park_name">{props.dogPark.park_name}</div>
            <div className="dogPark__street_address">{props.dogPark.street_address}</div>
            <div className="dogPark__city">{props.dogPark.city}</div>
            <div className="dogPark__state">{props.dogPark.state}</div>

            <button className="edit__button" color="primary">Edit</button>


        </section >
    </>
)