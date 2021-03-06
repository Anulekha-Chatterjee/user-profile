import { useContext } from "react";
import { DataProfileContext } from "../Context/DataContext";
import history from './../history';
import { Card, Image, Button } from "react-bootstrap";
function UserDetails() {
    const profileDetails = useContext(DataProfileContext)
    const handleClick = (e) => {
        e.preventDefault();
        history.push(`/`)
    }

    return (<div className="userDetails">
        <Card className="text-center">
            <Image className="userImg" src={profileDetails.picture.large} roundedCircle ></Image>
            <Card.Body>
                <Card.Title>Hello, I am {profileDetails.name.first} {profileDetails.name.last}</Card.Title>
                <Card.Text>
                    I live in {profileDetails.location.city}, {profileDetails.location.country}
                </Card.Text>
                <Card.Text>
                    Call me at: Phone: {profileDetails.phone} / Cell: {profileDetails.cell}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">Feel free to reach out to me at: {profileDetails.email}
            </Card.Footer>
            <Button variant="secondary"onClick={handleClick} size="sm">Back to Profiles</Button>
        </Card>
    </div>)
}

export default UserDetails;