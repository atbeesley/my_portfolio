import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render(){
    return(
      <div style ={{width: '100%', margin: 'auto'}}>
      <Grid className="landing-grid">
      <Cell col={12}><img
      src="https://i.imgur.com/hNsZK7z.png"
      alt="avatar"
      className="avatar-image"
      />
      <div className="banner-text">
      <h1>Alex Beesley</h1>
      <h2>Web application developer</h2>
      <hr />
      <p>HTML5 & CSS3 | JavaScript | Bootstrap | Ruby | Sinatra | SQL | Node.js | Express | Vue | React | MongoDB | Java | Spring</p>
      </div>
      <div className="social-links">
      {/* Linkedin */}
      <a href="https://www.linkedin.com/in/atbeesley/"  rel="noopener noreferrer" target="_blank">
        <i class="fa fa-linkedin-square" aria-hidden="true" />
      </a>

      {/* Github */}
      <a href="https://github.com/atbeesley"  rel="noopener noreferrer" target="_blank">
        <i class="fa fa-github-square" aria-hidden="true" />
      </a>

      {/* FreeCodeCamp */}
      <a href="https://www.freecodecamp.org/bokkeumbap"  rel="noopener noreferrer" target="_blank">
        <i class="fa fa-free-code-camp" aria-hidden="true" />
      </a>


      </div>
      </Cell>
      </Grid>
      </div>
    )
  }
}

export default Landing;
