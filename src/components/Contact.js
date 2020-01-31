import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render(){
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Alex Beesley</h2>
            <img src="https://i.imgur.com/hNsZK7z.png"
              alt="avatar"
              className="avatar-image"
              />
              <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Get in touch with Alex using one of these methods.</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact me</h2>
            <hr />
            <div className="contact-list">
            <List>
      <ListItem>
        <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
          <i className="fa fa-phone-square" aria-hidden="true" />
         (+44) 07903477798
          </ListItemContent>
      </ListItem>
      <ListItem>
        <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
          <i className="fa fa-envelope" aria-hidden="true" />
         alexander.beesley@gmail.com
          </ListItemContent>
      </ListItem>
      <ListItem>
        <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
          <i className="fa fa-skype" aria-hidden="true" />
         alex.beesley2
          </ListItemContent>
      </ListItem>
    </List>
</div>
          </Cell>

        </Grid>
      </div>
    )
  }
}

export default Contact;
