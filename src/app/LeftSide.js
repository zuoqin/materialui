import React from 'react';
import IconButton from 'material-ui/IconButton';
import ActionDashboard from 'material-ui/svg-icons/action/dashboard';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import ActionTimeline from 'material-ui/svg-icons/action/alarm';

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

const style = {margin: 5}; 
const styles = {
  smallIcon: {
    width: 36,
    height: 36,
  },
  mediumIcon: {
    width: 48,
    height: 48,
  },
  largeIcon: {
    width: 60,
    height: 60,
  },
  small: {
    width: 72,
    height: 72,
    padding: 16,
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24,
  },
  large: {
    width: 120,
    height: 120,
    padding: 30,
  },
};

const LeftSide = () => (
        <aside className="left-sidebar">

            <div className="scroll-sidebar">

                <nav className="sidebar-nav"
                  style={{paddingLeft: '0px'}}
                >
                    <ul id="sidebarnav">
                        <li>
                          <a className="waves-effect waves-dark" href="index.html" aria-expanded="false"
                            style={{paddingLeft: '0px'}}
                          >
                            <span className="hide-menu">
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
                                <ActionDashboard />
                              </IconButton>
                              PROJECTS DASHBOARD
                            </span>
                          </a>

                            <div className="card-block text-left"
                              style={{paddingTop: '0px',
                                marginTop: '-20px',
                                marginLeft: '20px'
                              }}
                            >
                              <ul className="list-inline m-b-0">
                                  <li>
                                      <h6 className="text-muted text-info">
                                        <i className="fa fa-circle font-10 m-r-10 "></i>
                                        BuildATeam
                                      </h6>
                                  </li>
                                  <li>
                                    <h6 className="text-muted  text-success"
                                      
                                    >
                                      <i className="fa fa-circle font-10 m-r-10"></i>
                                      Kickstagramm
                                    </h6>
                                  </li>
                              </ul>
                            </div>
                        </li>
                        <li>
                          <a className="waves-effect waves-dark" href="pages-profile.html" aria-expanded="false"
                            style={{paddingLeft: '0px'}}
                          >
                            <span className="hide-menu">
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
                                <ActionAssignment />
                              </IconButton>
                              MY ISSUES
                            </span>
                          </a>
                        </li>
                        <li>
                          <a className="waves-effect waves-dark" href="table-basic.html" aria-expanded="false"
                            style={{paddingLeft: '0px'}}
                          >
                            <span className="hide-menu">
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
                                <ActionTimeline />
                              </IconButton>
                              TIME TRACKING
                            </span>
                          </a>
                          <div className="card-block text-left"
                            style={{paddingTop: '0px',
                              marginTop: '-20px',
                              marginLeft: '20px'
                            }}
                          >
                            <ul className="list-inline m-b-0">
                                <li>
                                    <h6 className="text-muted text-info">
                                      <i className="fa fa-circle font-10 m-r-10 "></i>
                                      Start Tracking
                                    </h6>
                                </li>
                                <li>
                                  <h6 className="text-muted  text-success">
                                    <i className="fa fa-circle font-10 m-r-10"></i>
                                    Last tracked
                                  </h6>
                                </li>
                            </ul>
                          </div>
                        </li>
                    </ul>
                </nav>

            </div>
        </aside>

);

export default LeftSide;