import React, {createContext, useContext, useState} from 'react';
import UsersTable from "./UsersTable";
import AddUser from "./AddUser";
import UserLayout from "./UserLayout";
export const UsersContext = createContext({
    users: [],
    lastId: 0,
    addUser: () => null,
    updateUser: () => null,
    deleteUser: () => null
})

export  default  function UsersApp(props) {


    const [users, setUsers] = useState([]);
    const [lastId, setLastId] = useState(0);
    const  addUser = (date) => {
        setUsers(prevState => [...prevState, date.payload])
        setLastId(prevState => prevState+1);
        window.history.back();
    }
    const  updateUser = (data) => {
        const {id, ...rest} = data.payload;
        setUsers(prevState => prevState.map(user => user.id === id ? {id: user.id, ...rest} : user ))
        window.history.back();
    }

    const  deleteUser = (data) => {
        setUsers(prevState => prevState.filter(user => user.id !== data.payload.id))
        window.history.back();
    }

    return (
        <>
            <UsersContext.Provider value={{
                users : users,
                lastId : lastId,
                actions : {
                    addUser,
                    updateUser,
                    deleteUser
                }
            }} >
            <UserLayout/>
            </UsersContext.Provider>
        </>
    );
}
