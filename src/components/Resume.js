import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';

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
              <hr style={{borderTop: '3px solid #833fb2', width: '100%' }} />
              <p>This is some text</p>
              <hr style={{borderTop: '3px solid #833fb2', width: '100%' }} />
              <h5>Location</h5>
              <p>Edinburgh, Scotland</p>
              <h5>Phone number</h5>
              <p>(+44) 07903477798</p>
              <h5>Email</h5>
              <p>alexander.beesley@gmail.com</p>

            </div>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2008}
            />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
