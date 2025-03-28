import React from 'react';
import { render, screen } from '@testing-library/react';
import BugList from '../src/components/BugList';

describe('BugList Component', () => {
    const bugs = [
        { id: 1, title: 'Bug 1', status: 'open' },
        { id: 2, title: 'Bug 2', status: 'in-progress' },
        { id: 3, title: 'Bug 3', status: 'resolved' },
    ];

    test('renders BugList component', () => {
        render(<BugList bugs={bugs} />);
        const bugItems = screen.getAllByRole('listitem');
        expect(bugItems.length).toBe(bugs.length);
    });

    test('displays the correct bug titles', () => {
        render(<BugList bugs={bugs} />);
        bugs.forEach(bug => {
            expect(screen.getByText(bug.title)).toBeInTheDocument();
        });
    });

    test('displays the correct bug statuses', () => {
        render(<BugList bugs={bugs} />);
        bugs.forEach(bug => {
            expect(screen.getByText(bug.status)).toBeInTheDocument();
        });
    });

    test('renders empty message when no bugs are present', () => {
        render(<BugList bugs={[]} />);
        expect(screen.getByText(/no bugs reported/i)).toBeInTheDocument();
    });
});