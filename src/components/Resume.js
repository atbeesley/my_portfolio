import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Resume extends Component {
  render(){
    return(
      <div>
        <Grid>
          <Cell className="resume-left-col"col={4}>
            <div style={{textAlign: 'center'}}>
              <img
              src="https://i.imgur.com/hNsZK7z.png"
              alt="avatar"
              style={{height: '200px', borderRadius: 100}}
              />
              <h2 style={{paddingTop: '2em'}}>Alex Beesley</h2>
              <h4 style={{color: 'grey'}}>Programmer and web developer</h4>
            </div>
          </Cell>
          <Cell className="resume-right-col" col={8}>Right</Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
