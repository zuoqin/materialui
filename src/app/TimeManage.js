import React, { Component } from 'react'
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';


import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

const style = {margin: 5}; 

export default class TimeManage extends Component {
  render() {
    return (
      <div>
        <div className="row"
          style={{paddingBottom: '10px'}}
          >
          <div className="col-md-2">
            <Avatar icon={<FileFolder />} />
          </div>
          <div className="col-md-5">
            <div>
              Total estimated
            </div>
            <div style={{fontSize: 'x-large', fontWeight: 'bold', fontFamily: 'sans-serif'}}>
              {this.props.times[0]}
            </div>
          </div>

          <div className="col-md-4"
            style={{marginTop: '18px'}}
            >
            <a href="#"
              style={{fontSize: '16px'}}
              >See activity</a>
          </div>
        </div>


        <div className="row"
          style={{paddingTop: '7px',
            paddingBottom: '7px',
            background: '#EEEEEE'
          }}
          >
          <div className="col-md-2">

          </div>
          <div className="col-md-5">
            <div>
              Total purchased
            </div>
            <div style={{fontSize: 'x-large', fontWeight: 'bold', fontFamily: 'sans-serif'}}>
              {this.props.times[1]}
            </div>
          </div>
        </div>


        <div className="row"
          style={{paddingTop: '7px',
            paddingBottom: '7px',
            background: '#EEEEEE'
          }}
          >
          <div className="col-md-2">

          </div>
          <div className="col-md-5">
            <div>
              Total time tracked
            </div>
            <div style={{fontSize: 'x-large', fontWeight: 'bold', fontFamily: 'sans-serif'}}>
              {this.props.times[2]}
            </div>
          </div>
        </div>
      </div>
    )
  }
};