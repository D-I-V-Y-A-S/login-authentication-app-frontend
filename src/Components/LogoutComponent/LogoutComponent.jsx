import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutComponent = () => {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('token');
        setTimeout(() => {
            navigate('/login');
        }, 100); // Slight delay ensures proper redirection
    }, []);

    return null; // No need to return any UI
};

export default LogoutComponent;
