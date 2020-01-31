import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = { activeTab: 0};
  }

  toggleCategories(){
    if(this.state.activeTab === 0){
      return(
        <div><h1>This is React.js</h1></div>
      )
    } else if(this.state.activeTab === 1){
      return (
      <div><h1>This is Vue.js</h1></div>
    )
    } else if(this.state.activeTab === 2){
      return (
    <div><h1>This is Sinatra</h1></div>
  )
  }
  }

  render(){
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React.js</Tab>
          <Tab>Vue.js</Tab>
          <Tab>Sinatra</Tab>
        </Tabs>

      <section className="projects-grid">
        {this.toggleCategories()}
      </section>
      </div>

    )
  }
}

export default Projects ;
