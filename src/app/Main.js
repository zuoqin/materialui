/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Members from './Members';

import TopHeader from './topheader';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  }

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <div>

        <MuiThemeProvider muiTheme={muiTheme}>
          <TopHeader />

        </MuiThemeProvider>
        <div
          style={{position: 'relative', width: '100%', height: '90px', display: 'block',
            verticalAlign: 'baseline', float: 'none'}}
        >
        </div>

        <MuiThemeProvider muiTheme={muiTheme}>
          <LeftSide />
        </MuiThemeProvider>


        <MuiThemeProvider muiTheme={muiTheme}>
          <RightSide />
        </MuiThemeProvider>

      </div>

    );
  }
}

export default Main;
