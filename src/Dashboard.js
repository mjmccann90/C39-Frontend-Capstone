import React from "react"
import { ParkDataProvider } from "../src/components/park/ParkDataProvider"
import { ParkList } from "../src/components/park/ParkList"

//import "./Layout.css"

export const Dashboard = () => (
    <>
        <h1>615PupParks</h1>

        <h2>All the Middle TN Dog Parks</h2>
        <ParkDataProvider>
            <ParkList />
        </ParkDataProvider>
    </>
)