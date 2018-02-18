import React from 'react';
import TopLeft from './TopLeft';
import TopRight from './TopRight';

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

const style = {margin: 5}; 

const TopHeader = () => (
  <header className="topbar is_stuck"
    style={{position: 'fixed', top: '0px', width: '100%'}}
    > 
    <nav className="navbar top-navbar navbar-toggleable-sm navbar-light">
      <div className="navbar-header">
        <TopLeft />
      </div>

      <div className="navbar-collapse">
        <TopRight />
      </div>
    </nav>
  </header>
);

export default TopHeader;