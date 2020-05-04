import React from "react"
// add css import

export const dogPark = ({ dogPark }) => (
    <section className="dogPark">
        <div className="dogPark__park_name">{dogPark.park_name}</div>
        <div className="dogPark__street_address">{dogPark.street_address}</div>
        <div className="dogPark__city">{dogPark.city}</div>
        <div className="dogPark__state">{dogPark.state}</div>
    </section>
)