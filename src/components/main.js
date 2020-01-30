import React from 'react';
import Landing from './LandingPage';
import { Switch, Route } from 'react-router-dom';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';




const Main = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/aboutme" component={AboutMe} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/resume" component={Resume} />
    <Route exact path="/contact" component={Contact} />

  </Switch>
)

export default Main;
