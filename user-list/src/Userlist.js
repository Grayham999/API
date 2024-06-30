import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './userlist.css'; // Assuming you will add some styles in UserList.css

const UserList = () => {
    const [listOfUser, setListOfUser] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setListOfUser(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the users!", error);
            });
    }, []);

    return (
        <div className="user-list">
            <h1>List of Users</h1>
            <ul>
                {listOfUser.map(user => (
                    <li key={user.id}>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                        <p>{user.address.city}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
