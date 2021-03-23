import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './common/Header';
import { Contacts } from './pages/Contacts';
import { ToDoList } from './pages/ToDoList';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path='/todolist' component={ToDoList} />
          <Route path='/contacts' component={Contacts} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
