import React, { useEffect, useState } from 'react';
import axiosConfig from '../../axiosConfig';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null); // State to track any errors
    const [loading, setLoading] = useState(true); // State to show loading status

    useEffect(() => {
        // Fetch users when the component mounts
        axiosConfig.get('users/')
            .then(response => {
                setUsers(response.data); // Set users data
                setLoading(false); // Set loading to false after successful fetch
            })
            .catch(error => {
                setError('There was an error fetching the users!'); // Set error message
                setLoading(false); // Set loading to false on error
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Show loading indicator while fetching data
    }

    if (error) {
        return <div>{error}</div>; // Show error message if fetching failed
    }

    return (
        <div>
            <h2>User List</h2>
            {users.length > 0 ? (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            {user.username} 
                            {user.first_name} {user.last_name}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No users found.</p> // Show message if no users are available
            )}
        </div>
    );
}

export default ManageUsers;
