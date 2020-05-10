import React, { useState } from "react"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"

export const Favorite = ({ dogPark, review, favorite }) => (
    <section className="dogPark__Favorites">
        <div className="dogPark__park_name">{dogPark.park_name}</div>
        <div className="dogPark__street_address">{dogPark.street_address}</div>
        <div className="dogPark__city">{dogPark.city}</div>
        <div className="dogPark__state">{dogPark.state}</div>
        <div className="favorite__description">{review.description}</div>


    </section>
)