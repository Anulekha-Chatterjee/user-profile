import { useContext } from "react";
import { Card, Button, Image } from "react-bootstrap";
import history from './../history';
import "./UserComponent.css";
import {DataInfoContext, DataDispatchContext} from "../Context/DataContext";

function UserList() {
const data = useContext(DataInfoContext);
const setUserDetails  = useContext(DataDispatchContext);
const handleClick = (e) => {
        e.preventDefault();
        let value = (JSON.parse(e.target.value))
        history.push(`/profile/${value.login.username}`)
        setUserDetails(value)
    }

    return (<div>
        {data ? (data.results.map((el, i) => {
            return (
                <div className="usercard" key={i}>
                    <Card>
                        <Image src={el.picture.large} roundedCircle />
                        <Card.Body>
                            <Card.Title>{el.name.title} {el.name.first} {el.name.last}</Card.Title>
                            <Button variant="primary" value={JSON.stringify(el)} onClick={handleClick}>View Profile</Button>
                        </Card.Body>
                    </Card>
                </div>

            );
        }
        )) : <p>No data yet</p>
        }
    </div>)
}

export default UserList;