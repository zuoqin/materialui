import React, { Component } from 'react'
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import IconButton from 'material-ui/IconButton';
import ActionShare from 'material-ui/svg-icons/social/share';
import ActionEdit from 'material-ui/svg-icons/image/edit';

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

export default class Members extends Component {
  renderPiece(value, index) {
    return (      
      <ListItem
        key = {index}
        disabled={true}
        primaryText={value.name}
        secondaryText={value.desc}
        leftAvatar={
          <Avatar 
            style={{paddingBottom: '0px'}}
            src={"images/users/" + index + ".jpg"} />
        }
        rightAvatar={<Avatar
          color={'black'}
          backgroundColor={'transparent'}
          size={30}
          style={{fontWeight: 'bold'}}
        >
          {'$' + value.rate}
        </Avatar>}
      >
      </ListItem>
    )
  }

  renderList() {
    let a = this
    return this.props.members.map((value, index) => {
      return a.renderPiece(value, index)
    })
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-8" style={{fontSize: 'x-large', marginTop: '30px'}}>Members
          </div>
          <div className="col-md-2">
            <IconButton
              disabled= {true}
              iconStyle={{
                width: 28,
                height: 28,
              }}
              style={{
                width: 60,
                height: 60,
                padding: 12,
              }}
            >
              <ActionShare />
            </IconButton>
          </div>

          <div className="col-md-2">
            <IconButton
              disabled= {true}
              iconStyle={{
                width: 28,
                height: 28,
              }}
              style={{
                width: 60,
                height: 60,
                padding: 12,
              }}
            >
              <ActionEdit />
            </IconButton>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9">
          </div>
          <div className="col-md-3"
            style={{textAlign: "center"}}
          > RATE
          </div>
        </div>

        <List style={{paddingTop: '0px', marginTop: '-15px'}}>
          {this.renderList()}
        </List>

      </div>
    )
  }
}
