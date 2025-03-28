import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const BugDetailsPage = () => {
    const { id } = useParams();
    const history = useHistory();
    const [bug, setBug] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBugDetails = async () => {
            try {
                const response = await fetch(`/api/bugs/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch bug details');
                }
                const data = await response.json();
                setBug(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBugDetails();
    }, [id]);

    const handleDelete = async () => {
        try {
            await fetch(`/api/bugs/${id}`, {
                method: 'DELETE',
            });
            history.push('/');
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Bug Details</h1>
            <h2>{bug.title}</h2>
            <p>Status: {bug.status}</p>
            <p>Description: {bug.description}</p>
            <button onClick={handleDelete}>Delete Bug</button>
        </div>
    );
};

export default BugDetailsPage;