import React, { Component } from 'react'
import ActionPlus from 'material-ui/svg-icons/content/add';
import IconButton from 'material-ui/IconButton';


import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

const style = {margin: 5}; 

export default class BottomArtifact extends Component {
   render() {
    //console.log('key=' + this.props.ind)
    return (
      <div
        className="row"
        key={'artifact'+this.props.ind}
        style={{width: '50%'}}
        >
        <div className="col-md-2"
          >
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
            <ActionPlus />
          </IconButton>
        </div>
        <div className="col-md-10"
          style={{fontSize: 'medium', marginTop: '15px', paddingLeft: '20px', overflow: 'hidden', whiteSpace: 'nowrap'}}
          >
          {this.props.name}
        </div>
      </div>
    )};
}
