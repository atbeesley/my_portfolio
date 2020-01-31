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
              <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>this is some text</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact me</h2>
            <hr />
            <div className="contact-list">
            <List>
      <ListItem>
        <ListItemContent icon="person">Bryan Cranston</ListItemContent>
      </ListItem>
      <ListItem>
        <ListItemContent icon="person">Aaron Paul</ListItemContent>
      </ListItem>
      <ListItem>
        <ListItemContent icon="person">Bob Odenkirk</ListItemContent>
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
