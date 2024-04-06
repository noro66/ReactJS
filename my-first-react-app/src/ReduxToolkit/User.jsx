import {useDispatch, useSelector} from "react-redux";
import {userSelectors} from "./Store/UserSelectors";
import { Card, Button } from 'react-bootstrap';
import {resetUser} from "./features/UserSlice";

const User = () => {
    const user = useSelector(userSelectors);
    const dispatch = useDispatch();
   const  handelClick = () => {
       dispatch(resetUser());
   }

    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>{}</Card.Title>
                    <p>Name: {user.user.name}</p>
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <p>Country:  <img
                        src={`https://flagcdn.com/w20/${user.user.country}.png`}
                        width="20"
                        alt="Counrty image"/></p>

                    <p>Age: {user.user.age}</p>
                    <Card.Title>User Actions</Card.Title>
                    <Button  className={'mx-5 cursor-pointer'} onDoubleClick={handelClick} variant="danger">Reset User</Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default User;