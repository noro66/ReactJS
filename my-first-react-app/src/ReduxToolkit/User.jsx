import {useSelector} from "react-redux";
import {userSelectors} from "./Store/UserSelectors";
import { Card, Button } from 'react-bootstrap';

const User = () => {
    const user = useSelector(userSelectors);

    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>{}</Card.Title>
                    <p>Name: {user.user.name}</p>
                    <p>Country:  <img
                        src={`https://flagcdn.com/w20/${user.user.country}.png`}
                        width="20"
                        alt="Counrty image"/></p>

                    <p>Age: {user.user.age}</p>
                    <Card.Title>User Actions</Card.Title>
                    <Button className={'mx-5'} variant="success">Add User</Button>
                    <Button className={'mx-5'} variant="primary">Reset User</Button>
                    <Button className={'mx-5'} variant="warning">Update User</Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default User;