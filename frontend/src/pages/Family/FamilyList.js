import React, { useEffect, useState } from 'react';
import api from '../../axiosConfig'; // Ensure this includes the proper headers

const FamilyList = () => {
    const [families, setFamilies] = useState([]);

    useEffect(() => {
        api.get('families/')
            .then(response => {
                setFamilies(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the families!', error.response ? error.response.data : error.message);
            });
    }, []);

    const handleDelete = (id) => {
        api.delete(`families/${id}/`)
            .then(() => {
                setFamilies(prevFamilies => prevFamilies.filter(family => family.family_id !== id));
            })
            .catch(error => {
                console.error('Error deleting family member:', error.response ? error.response.data : error.message);
                alert('Failed to delete family member. Please try again.');
            });
    };

    return (
        <div className="container">
            <h2>Family Members</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Relationship</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {families.map(family => (
                        <tr key={family.family_id}>
                            <td>{family.name}</td>
                            <td>{family.relationship}</td>
                            <td>{family.age}</td>
                            <td>
                                <button onClick={() => handleDelete(family.family_id)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FamilyList;
