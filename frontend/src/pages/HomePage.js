import React, { useEffect, useState } from 'react';
import BugList from '../components/BugList';
import BugForm from '../components/BugForm';

const HomePage = () => {
    const [bugs, setBugs] = useState([]);

    const fetchBugs = async () => {
        try {
            const response = await fetch('/api/bugs');
            const data = await response.json();
            setBugs(data);
        } catch (error) {
            console.error('Error fetching bugs:', error);
        }
    };

    useEffect(() => {
        fetchBugs();
    }, []);

    const addBug = (newBug) => {
        setBugs((prevBugs) => [...prevBugs, newBug]);
    };

    const updateBug = (updatedBug) => {
        setBugs((prevBugs) =>
            prevBugs.map((bug) => (bug._id === updatedBug._id ? updatedBug : bug))
        );
    };

    const deleteBug = (bugId) => {
        setBugs((prevBugs) => prevBugs.filter((bug) => bug._id !== bugId));
    };

    return (
        <div>
            <h1>Bug Tracker</h1>
            <BugForm addBug={addBug} />
            <BugList bugs={bugs} updateBug={updateBug} deleteBug={deleteBug} />
        </div>
    );
};

export default HomePage;