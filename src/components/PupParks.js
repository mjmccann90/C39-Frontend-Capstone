import React, { useState } from "react"
import Auth from "./auth/Auth"
import { Dashboard } from "../Dashboard"



export default () => {
    const [check, update] = useState(false)
    const toggle = () => update(!check)

    return (
        localStorage.getItem("dog_owner") ? <Dashboard /> : <Auth toggle={toggle} />
    )
}
