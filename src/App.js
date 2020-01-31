import React, { Component } from 'react';
import './App.css';
import { Header, Navigation, Drawer, Content, Layout } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
render() {
  return (
    <div className="demo-big-content">
        <Layout>
            <Header title=" " className="header-colour" scroll>
                <Navigation>
                    <Link to="/aboutme">About me</Link>
                    <Link to="/projects">My projects</Link>
                    <Link to="/resume">My CV</Link>
                    <Link to="/contact">Contact me</Link>
                </Navigation>
            </Header>
            <Drawer title="Title">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/aboutme">About me</Link>
                <Link to="/projects">My projects</Link>
                <Link to="/resume">My CV</Link>
                <Link to="/contact">Contact me</Link>
            </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main />
            </Content>
        </Layout>
    </div>
    );
  }
}

export default App;
