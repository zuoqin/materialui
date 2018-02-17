import React from 'react';


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
  <header className="topbar"> 
    <nav className="navbar top-navbar navbar-toggleable-sm navbar-light">
      <div className="navbar-header">
        <a className="navbar-brand" href="index.html">
          <b>
            <img src="images/logo-light-icon.png" className="light-logo" />
          </b>
        </a>
      </div>

      <div className="navbar-collapse">
        
      </div>
    </nav>
  </header>
);

export default TopHeader;