import { useContext } from "react";
import {DataProfileContext} from "../Context/DataContext";
import { Image } from "react-bootstrap";
function UserDetails()
{
    const profileDetails = useContext(DataProfileContext)
    return (<div className= "userDetails">
        <Image className="userImg" src= {profileDetails.picture.large} rounded ></Image>
        <h1>Hello, I am {profileDetails.name.first} {profileDetails.name.last}</h1>
        <p>I live in {profileDetails.location.city}, {profileDetails.location.country} </p>
        <p>Feel free to reach out to me at {profileDetails.email}</p>
        <div>You can also call me at: <ul>
            <li>
                {profileDetails.phone}
            </li>
            <li>
                {profileDetails.cell}
            </li>
            </ul></div>
    </div>)
}

export default UserDetails;