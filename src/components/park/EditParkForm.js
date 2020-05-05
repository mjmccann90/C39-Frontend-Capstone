import React, { useContext, useState } from "react"
import { DogParkContext } from "./ParkDataProvider"

export const EditParkForm = ({ dogPark, toggleEdit }) => {

    const { updatePark } = useContext(DogParkContext)

    // Separate state variable to track the Dogpark as it is edited
    const [updatedPark, setPark] = useState(dogPark)

    /*
       When changing a state object or array, always create a new one
       and change state instead of modifying current one
   */

    const handleControlledInputChange = (event) => {

        // Create a new copy of the dogPark being edited

        const newPark = Object.assign({}, updatedPark)

        // Change the property value on the copy
        newPark[event.target.park_name] = event.target.value

        // Set the copy as the new state
        setPark(newPark)
    }
    const editPark = () => {
        updatePark({
            id: updatedPark.id,
            park_name: updatedPark.park_name,
            street_address: updatedPark.street_address,
            city: updatedPark.city,
            state: updated.state,
            userId: parseInt(localStorage.getItem("dog_owner"))
        })
            .then(toggleEdit)
    }


    return (
        <form className="parkForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="parkForm--park_name">Park name: </label>
                    <input type="text"
                        name="park_name" required autoFocus className="form-control"
                        placeholder="Park Name"
                        defaultValue={dogPark.park_name}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="parkForm--street_address">Street Address</label>
                    <input type="text"
                        name="street_address"
                        required className="form-control"
                        placeholder="Street Address"
                        defaultValue={dogPark.street_address}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text"
                        name="city"
                        required className="form-control"
                        placeholder="City"
                        defaultValue={dogPark.city}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input type="text"
                        name="state"
                        required className="form-control"
                        placeholder="state"
                        defaultValue={dogPark.state}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>

            <button type="submit" className="btn btn-primary"
                onClick={evt => {
                    evt.preventDefault()
                    editPark()
                }}>
                Save Updates
            </button>
        </form>
    )
}