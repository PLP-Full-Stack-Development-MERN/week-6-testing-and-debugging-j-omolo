import React, { useEffect, useState } from 'react';
import BugItem from './BugItem';

const BugList = () => {
    const [bugs, setBugs] = useState([]);

    useEffect(() => {
        const fetchBugs = async () => {
            const response = await fetch('/api/bugs');
            const data = await response.json();
            setBugs(data);
        };

        fetchBugs();
    }, []);

    return (
        <div>
            <h2>Bug List</h2>
            <ul>
                {bugs.map(bug => (
                    <BugItem key={bug._id} bug={bug} />
                ))}
            </ul>
        </div>
    );
};

export default BugList;