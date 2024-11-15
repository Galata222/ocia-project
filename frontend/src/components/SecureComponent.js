import React, { useEffect, useState } from 'react';
import { fetchSecureData } from '../services/authService';

const SecureComponent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchSecureData();
                setData(response.data);
            } catch (error) {
                console.error("Error fetching secure data", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Secure Data</h1>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}
        </div>
    );
};

export default SecureComponent;
