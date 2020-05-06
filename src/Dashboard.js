import React from "react"
import { ParkDataProvider } from "../src/components/park/ParkDataProvider"
import { ParkList } from "../src/components/park/ParkList"

import { FavoriteDataProvider } from "../src/components/favorites/FavoriteDataProvider"
import { FavoriteList } from "../src/components/favorites/FavoriteList"

// import "./Layout.css"



export default () => {
    const [activeList, setActiveList] = useState("locations")
    const [components, setComponents] = useState()


    // HIGHER ORDER FUNCTION. IT RETURNS OTHER FUNCTION (i.e. COMPONENTS)
    const showParks = () => (
        <ParkDataProvider>
            <ParkList />
        </ParkDataProvider >
    )

    const showFavorites = () => (
        <FavoriteDataProvider>
            <ParkDataProvider>
                <FavoriteList />
            </ParkDataProvider>
        </FavoriteDataProvider>
    )

    /*
        This effect hook determines which list is shown
        based on the state of the `activeList` variable.
    */
    useEffect(() => {
        if (activeList === "parks") {
            setComponents(showParks)
        }
        else if (activeList === "favorites") {
            setComponents(showFavorites)
        }
    }, [activeList])
)

    return (
        <div className="mainContainer">
            <div className="dataContainer">
                <h1>Nashville Kennels</h1>
                <small>Loving care when you're not there.</small>
                <div className="listContainer">
                    <div className="links">
                        <div className="fakeLink href" onClick={() => setActiveList("locations")}>Locations</div>
                        <div className="fakeLink href" onClick={() => setActiveList("customers")}>Customers</div>
                        <div className="fakeLink href" onClick={() => setActiveList("employees")}>Employees</div>
                    </div>
                    <div className="listDisplay">
                        {components}
                    </div>
                </div>
            </div>
        </div>
    )
}
