import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Tracker from './components/Tracker';
import AddTask from './components/AddTask';
import AllTasks from './components/AllTasks';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/"><Tracker /></Route>
        <Route exact path="/addTask"><AddTask /></Route>
        <Route exact path="/allTasks"><AllTasks /></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;