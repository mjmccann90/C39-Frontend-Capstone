import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const UserContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const UserDataProvider = (props) => {
    // favorites = data
    // setfavorites = function that React created, so we can use it to set state of favorites
    const [user, setUser] = useState([])

    /*
    
    
    
        Load all users when the component is initialized. 
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getUsers()
    }, [])

    return (
        <UserContext.Provider value={
            {
                user,
                addUsers,
                //updateFavorite
            }
        }>
            {props.children}
        </UserContext.Provider>
    )
}