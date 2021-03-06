import React, { useContext, useState, useEffect } from "react"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"

//import { FavoriteContext } from "../favorite/FavoriteDataProvider"
import { DogParkContext } from "./ParkDataProvider"
import AddParkForm from "./AddParkForm"
import { DogPark } from "../park/Park"
import "./Park.css"

export const ParkList = ({ setActiveList, searchTerms }) => {
    const { parks } = useContext(DogParkContext) || []

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const [filteredParks, setFiltered] = useState([])

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = parks.filter(park => park.park_name.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else {
            setFiltered([])
        }
    }, [searchTerms, parks])

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
                    parks.map(dogP => <DogPark key={dogP.id} dogPark={dogP} setActiveList={setActiveList} />)
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