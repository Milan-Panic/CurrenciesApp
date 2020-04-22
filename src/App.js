import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Delete from './components/Delete';
import Edit from './components/Edit';
import NewPost from './components/NewPost';

function App() {

  return (
    <>
    <Router>
      <Switch>

        <Route exact path = "/">
          <Wrapper />
        </Route>

        <Route path="/delete/:id">
          <Delete />
        </Route>

        <Route path="/edit/:id">
          <Edit />
        </Route>

        <Route path="/addNew">
          <NewPost />
        </Route>

      </Switch>
    </Router>
    </>
  );
}

export default App;
