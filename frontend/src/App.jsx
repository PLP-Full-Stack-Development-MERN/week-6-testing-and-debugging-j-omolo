import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BugDetailsPage from './pages/BugDetailsPage';
import BugForm from './components/BugForm';
import BugList from './components/BugList';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Bug Tracker</h1>
        <BugForm />
        <BugList />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/bugs/:id" component={BugDetailsPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;