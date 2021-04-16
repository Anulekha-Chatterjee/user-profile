import React, {useState, useEffect, createContext} from "react";
export const DataInfoContext = createContext();
export const DataDispatchContext = createContext();
export const DataProfileContext = createContext();

export default function DataInfoContextProvider (props)
{
    const [data, setData] = useState(null);
    const [profile, setProfileData] = useState (null)


    useEffect(() => {
        fetch('https://randomuser.me/api/?results=50')
            .then(res => res.json())
            .then(setData)
    }, [])

    return (
        <DataInfoContext.Provider value = {data}>
            <DataDispatchContext.Provider value = {setProfileData}>
            <DataProfileContext.Provider value = {profile}>
            {props.children}
            </DataProfileContext.Provider>
            </DataDispatchContext.Provider>
        </DataInfoContext.Provider>
       
        
    )
    
}
