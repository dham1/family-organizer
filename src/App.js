import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard.component';


const TasksPage = () => (
  <div>
    <h1>TASKS</h1>
  </div>
);
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/tasks' component={TasksPage} />
      </Switch>

    </div>
  );
}

export default App;
