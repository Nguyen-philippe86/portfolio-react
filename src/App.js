import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projets" component={Project} />
        <Route path="/competences" component={Skills} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;