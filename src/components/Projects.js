import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = { activeTab: 0};
  }

  toggleCategories(){
    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
        {/* React Project 1 */}
        <Card shadow={3} style={{ minWidth: '450', margin: 'auto' }}>
        <CardTitle style={{ color: '#000', height: '176px',
        background: 'url(https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg) center / cover'
        }}>React Project #1</CardTitle>
        <CardText>
        This is my first React project.
        </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Live demo</Button>
          </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
        </Card>

        {/* React Project 2 */}
        <Card shadow={3} style={{ minWidth: '450', margin: 'auto' }}>
        <CardTitle style={{ color: '#000', height: '176px',
        background: 'url(https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg) center / cover'
        }}>React Project #2</CardTitle>
        <CardText>
        This is my second React project.
        </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Live demo</Button>
          </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
        </Card>

        {/* React Project 3 */}
        <Card shadow={3} style={{ minWidth: '450', margin: 'auto' }}>
        <CardTitle style={{ color: '#000', height: '176px',
        background: 'url(https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg) center / cover'
        }}>React Project #3</CardTitle>
        <CardText>
        This is my third React project.
        </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Live demo</Button>
          </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
        </Card>
        </div>
      )
    }
    else if(this.state.activeTab === 1){
      return (
      <div className="projects-grid">
      {/* Vue Project 1 */}
      <Card shadow={3} style={{ minWidth: '450', margin: 'auto' }}>
      <CardTitle style={{ color: '#000', height: '176px',
      background: 'url(https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg) center / cover'
      }}>Vue Project #1</CardTitle>
      <CardText>
      This is my first Vue project.
      </CardText>
        <CardActions border>
          <Button colored>Github</Button>
          <Button colored>Live demo</Button>
        </CardActions>
      <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
      </CardMenu>
      </Card>

      {/* Vue Project 2 */}
      <Card shadow={3} style={{ minWidth: '450', margin: 'auto' }}>
      <CardTitle style={{ color: '#000', height: '176px',
      background: 'url(https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg) center / cover'
      }}>Vue Project #2</CardTitle>
      <CardText>
      This is my second Vue project.
      </CardText>
        <CardActions border>
          <Button colored>Github</Button>
          <Button colored>Live demo</Button>
        </CardActions>
      <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
      </CardMenu>
      </Card>

      {/* Vue Project 3 */}
      <Card shadow={3} style={{ minWidth: '450', margin: 'auto' }}>
      <CardTitle style={{ color: '#000', height: '176px',
      background: 'url(https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg) center / cover'
      }}>Vue Project #3</CardTitle>
      <CardText>
      This is my third Vue project.
      </CardText>
        <CardActions border>
          <Button colored>Github</Button>
          <Button colored>Live demo</Button>
        </CardActions>
      <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
      </CardMenu>
      </Card>
      </div>
    )
    } else if(this.state.activeTab === 2){
      return (
        <div className="projects-grid">
        {/* Sinatra Project 1 */}
        <Card shadow={3} style={{ minWidth: '450', margin: 'auto' }}>
        <CardTitle style={{ color: '#000', height: '176px',
        background: 'url(https://avatars3.githubusercontent.com/u/8312?s=400&v=4) center / cover'
        }}>Sinatra Project #1</CardTitle>
        <CardText>
        This is my first Sinatra project.
        </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Live demo</Button>
          </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
        </Card>

        {/* Sinatra Project 2 */}
        <Card shadow={3} style={{ minWidth: '450', margin: 'auto' }}>
        <CardTitle style={{ color: '#000', height: '176px',
        background: 'url(https://avatars3.githubusercontent.com/u/8312?s=400&v=4) center / cover'
        }}>Sinatra Project #2</CardTitle>
        <CardText>
        This is my second Sinatra project.
        </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Live demo</Button>
          </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
        </Card>

        {/* Sinatra Project 3 */}
        <Card shadow={3} style={{ minWidth: '450', margin: 'auto' }}>
        <CardTitle style={{ color: '#000', height: '176px',
        background: 'url(https://avatars3.githubusercontent.com/u/8312?s=400&v=4) center / cover'
        }}>Sinatra Project #3</CardTitle>
        <CardText>
        This is my third Sinatra project.
        </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Live demo</Button>
          </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
        </Card>
        </div>
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
          <Grid>
            <Cell col={12}>
              {this.toggleCategories()}
            </Cell>
          </Grid>
        </section>
        </div>

    )
  }
}

export default Projects ;
