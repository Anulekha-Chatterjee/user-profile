import { useContext } from "react";
import {DataProfileContext} from "../Context/DataContext";
function UserDetails()
{
    const profileDetails = useContext(DataProfileContext)
    console.log (profileDetails)
    return (<div>
        
    </div>)
}

export default UserDetails;