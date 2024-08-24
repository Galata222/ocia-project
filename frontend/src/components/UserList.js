// src/components/UserList.js

import React, { useEffect, useState } from 'react';
import api from '../axiosConfig';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch users when the component mounts
        api.get('users/')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the users!', error);
            });
    }, []);

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
