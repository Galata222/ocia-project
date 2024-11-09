// import React, { useEffect, useState } from 'react';
// import axiosConfig from '../../axiosConfig';

// const ManageUsers = () => {
//     const [users, setUsers] = useState([]);
//     const [error, setError] = useState(null); // State to track any errors
//     const [loading, setLoading] = useState(true); // State to show loading status

//     useEffect(() => {
//         // Fetch users when the component mounts
//         axiosConfig.get('users/')
//             .then(response => {
//                 setUsers(response.data); // Set users data
//                 setLoading(false); // Set loading to false after successful fetch
//             })
//             .catch(error => {
//                 setError('There was an error fetching the users!'); // Set error message
//                 setLoading(false); // Set loading to false on error
//             });
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>; // Show loading indicator while fetching data
//     }

//     if (error) {
//         return <div>{error}</div>; // Show error message if fetching failed
//     }

//     return (
//         <div>
//             <h2>User List</h2>
//             {users.length > 0 ? (
//                 <ul>
//                     {users.map(user => (
//                         <li key={user.id}>
//                             {user.username} 
//                             {user.first_name} {user.last_name}
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>No users found.</p> // Show message if no users are available
//             )}
//         </div>
//     );
// }

// export default ManageUsers;

import React, { useEffect, useState } from 'react';
import axiosConfig from '../../axiosConfig';
import DataTable from 'react-data-table-component';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosConfig.get('users/')
            .then(response => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError('There was an error fetching the users!');
                setLoading(false);
            });
    }, []);

    const columns = [
        { name: 'Username', selector: row => row.username, sortable: true },
        { name: 'First Name', selector: row => row.first_name, sortable: true },
        { name: 'Last Name', selector: row => row.last_name, sortable: true },
    ];

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>User List</h2>
            {users.length > 0 ? (
                <DataTable
                    columns={columns}
                    data={users}
                    pagination
                    highlightOnHover
                    pointerOnHover
                />
            ) : (
                <p>No users found.</p>
            )}
        </div>
    );
}

export default ManageUsers;
