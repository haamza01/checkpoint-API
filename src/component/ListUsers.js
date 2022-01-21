import { Card } from "react-bootstrap";

const ListUsers = ({ el }) => {
    return (
        <div>
            <Card id="Card">
                <Card.Body>
                    <Card.Title>Name : {el.name} </Card.Title>
                    <Card.Text>Username : {el.username}</Card.Text>
                    <Card.Text>Email : {el.email}</Card.Text>
                    <Card.Text>Adresse : ${el.address.zipcode}</Card.Text>
                    <Card.Text>Phone : {el.phone}</Card.Text>
                    <Card.Text>Street : {el.address.street} </Card.Text>
                    <Card.Text>Suite : {el.address.suite} </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ListUsers;
