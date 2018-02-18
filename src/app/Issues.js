import React from 'react';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import Chip from 'material-ui/Chip';
import ListItem from 'material-ui/List/ListItem';
import BugReport from 'material-ui/svg-icons/action/bug-report';
import Settings from 'material-ui/svg-icons/action/settings';
import Question from 'material-ui/svg-icons/action/question-answer';


import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
  blueA700,
  lime900,
} from 'material-ui/styles/colors';

const style = {margin: 5};
const avatartext = {fontWeight: 'bold', marginTop: '-10px'};
const avatarsubtext = { color: 'grey'};

const Issues = () => (
  <div>
    <div className="col-md-8" style={{fontSize: 'x-large', marginTop: '30px'}}>Issue tracking
    </div>
    <List>
      <ListItem
        disabled={true}
        primaryText="Bug"
        secondaryText=""
        leftAvatar={
           <Avatar backgroundColor='transparent' color='lightgrey' size={50} icon={<BugReport />} />
        }
        rightAvatar={
          <Chip
            backgroundColor={blue300}
          >
            1/2/4
          </Chip>
        }
      >
      </ListItem>


      <ListItem
        disabled={true}
        primaryText="Support"
        secondaryText=""        
        leftAvatar={
          <Avatar backgroundColor='transparent' color='lightgrey' size={50} icon={<Settings />} />
        }
        rightAvatar={
          <Chip
            backgroundColor={lime900}
          >
            2/4/8
          </Chip>
        }
      >
      </ListItem>


      <ListItem
        disabled={true}
        primaryText="Question"
        secondaryText=""        
        leftAvatar={
          <Avatar backgroundColor='transparent' color='lightgrey' size={50} icon={<Question />} />
        }
        rightAvatar={
          <Chip
            backgroundColor={blueA700}
          >
            1/3/7
          </Chip>
        }
      >
      </ListItem>
    </List>
  </div>

);

export default Issues;