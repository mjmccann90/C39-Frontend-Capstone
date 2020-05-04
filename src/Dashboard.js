import React from "react"
import { ParkDataProvider } from "../src/components/park/ParkDataProvider"
import { ParkList } from "../src/components/park/ParkList"

export const Dashboard = () => (
    <>
        <h2>test</h2>
        <small>test</small>
        <h2>All the Bark Parks</h2>
        <ParkDataProvider>
            <ParkList />
        </ParkDataProvider>
    </>
)