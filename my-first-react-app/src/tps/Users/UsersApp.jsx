import React, {useState} from 'react';
import UsersTable from "./UsersTable";
import AddUser from "./AddUser";


function UsersApp(props) {


    const [users, setUsers] = useState([]);
    const [lastId, setLastId] = useState(0);
    const  addUser = (date) => {
        console.log(date.payload)
        setUsers(prevState => [...prevState, date.payload])
        setLastId(prevState => prevState+1)

    }
    return (
        <>
        <AddUser lastId={lastId+1} onAddUser={addUser}/>
        <UsersTable users={users} />
        </>
    );
}

export default UsersApp;