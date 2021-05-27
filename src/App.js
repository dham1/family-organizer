import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard.component';
import TasksPage from './pages/tasks/tasks.component';
import Header from './components/header/header.component';
function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/tasks' component={TasksPage} />
      </Switch>

    </div>
  );
}

export default App;
