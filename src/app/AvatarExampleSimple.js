import React from 'react';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

const style = {margin: 5};
const avatartext = {fontWeight: 'bold', marginTop: '-10px'};
const avatarsubtext = { color: 'grey'};

const AvatarExampleSimple = () => (
  <div>
    <div>Members
    </div>
    <List>
      <ListItem
        disabled={true}
        primaryText="Designer"
        secondaryText="SMM | 11:39"
        leftAvatar={
          <Avatar 
            style="paddingBottom: 0px"
            src="images/users/uxceo-128.jpg" />
        }
        rightAvatar={<h5>kjhkjhkj</h5>}
      >
      </ListItem>


      <ListItem
        disabled={true}
        leftAvatar={
          <Avatar 
            style="paddingBottom: 0px"
            src="images/uxceo-128.jpg" />
        }
      >
        <div style={avatartext} >Designer
        </div>
        <div style={avatarsubtext}>
        </div>
      </ListItem>


      <ListItem
        disabled={true}
        leftAvatar={
          <Avatar 
            style="paddingBottom: 0px"
            src="images/uxceo-128.jpg" />
        }
      >
        <div style={avatartext} >Designer
        </div>
        <div style={avatarsubtext}>SMM | 11:39
        </div>
      </ListItem>
    </List>
  </div>

);

export default AvatarExampleSimple;