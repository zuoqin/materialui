import React from 'react';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import ActionExit from 'material-ui/svg-icons/action/exit-to-app';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
  white,
} from 'material-ui/styles/colors';

const style = {margin: 5}; 

const TopLeft = () => (

  <div className="row"
    style={{padding: '0px', marginLeft: '10px'}}
  >
    <Avatar size={60} src="images/users/uxceo-128.jpg" />
    <Badge
      badgeContent={10}
      secondary={true}
      badgeStyle={{top: 10, right: 0}}
      style={{padding: '0px', height: '20px', color: white}}
    >
      <IconButton style={{color: white}} tooltip="Notifications">
        <NotificationsIcon 
          style={{color: white}}
        />
      </IconButton>
    </Badge>

    <FontIcon className="material-icons" style={{marginLeft: '20px', marginTop: '15px'}} color='white'>settings</FontIcon>
    <FontIcon className="material-icons" style={{marginLeft: '20px', marginTop: '15px'}} color='white'>exit_to_app</FontIcon>
  </div>
);

export default TopLeft;