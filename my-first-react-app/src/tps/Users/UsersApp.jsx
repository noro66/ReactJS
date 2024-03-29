import React, {createContext, useContext, useState} from 'react';
import UsersTable from "./UsersTable";
import AddUser from "./AddUser";
import UserLayout from "./UserLayout";
export const UsersContext = createContext({
    users: [],
    lastId: 0,
    addUser: () => null
})

export  default  function UsersApp(props) {


    const [users, setUsers] = useState([]);
    const [lastId, setLastId] = useState(0);
    const  addUser = (date) => {
        console.log(date.payload)
        setUsers(prevState => [...prevState, date.payload])
        setLastId(prevState => prevState+1)

    }
    return (
        <>
            <UsersContext.Provider value={{
                users : users,
                lastId : lastId,
                addUser : addUser
            }} >
            <UserLayout/>
            </UsersContext.Provider>
        </>
    );
}
