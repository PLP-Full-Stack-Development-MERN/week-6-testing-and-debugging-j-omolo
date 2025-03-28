import React from 'react';

const BugItem = ({ bug, onUpdate, onDelete }) => {
    const handleUpdate = () => {
        onUpdate(bug.id);
    };

    const handleDelete = () => {
        onDelete(bug.id);
    };

    return (
        <div className="bug-item">
            <h3>{bug.title}</h3>
            <p>Status: {bug.status}</p>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default BugItem;