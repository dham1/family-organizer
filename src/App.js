import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard.component';
import TasksPage from './pages/tasks/tasks.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/tasks' component={TasksPage} />
        <Route path='/signin' component={SignInAndSignUp} />

      </Switch>
    </div>
  );
}

export default App;
