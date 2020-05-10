import React, { useContext, useRef } from "react"
import { DogParkContext } from "./ParkDataProvider"
import "./Park.css"

export default props => {
    const { addPark } = useContext(DogParkContext)

    // Store references to the <input> elements below
    const park_name = useRef()
    const street_address = useRef()
    const city = useRef()
    const state = useRef()



    // Function to create an object and save it to the API
    const constructNewPark = () => {
        const userId = parseInt(localStorage.getItem("dog_owner"))
        // create a new park object
        // Make sure that the park object has the userId foreign key on it.
        const newParkObj = {
            park_name: park_name.current.value,
            street_address: street_address.current.value,
            city: city.current.value,
            state: state.current.value,
            userId: userId
        }
        addPark(newParkObj).then(props.toggler)
    }

    return (
        <form className="parkForm">
            <h2 className="parkForm__Name"></h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="parkForm--park_name"> </label>
                    <input
                        type="text"
                        id="park_name"
                        ref={park_name}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Park Name"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="parkForm--street_address"> </label>
                    <input
                        type="text"
                        id="street_address"
                        ref={street_address}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Street address"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="city"></label>
                    <input
                        type="text"
                        id="city"
                        ref={city}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="City"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="state"> </label>
                    <input
                        type="text"
                        id="state"
                        ref={state}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="State"
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewPark()
                    }
                }
                className="btn btn-primary">
                Save New Park
            </button>
        </form>
    )
}