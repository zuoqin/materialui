import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

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
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

const TopRight = () => (
  <div 
    style={{width: '100%'}}
    >
    <div className="row"
      style={{fontSize: 'x-large', color: 'white', marginBottom: '0px', marginTop: '20px', marginLeft: '20px'}}
      >
      Project
    </div>
    <div className="row"
      style={{width: '100%'}}
      >

      <Tabs
        style={{width: '100%'}}
        >
        <Tab

          style={{backgroundColor: '#5001EE'}}
          label="OVERVIEW"
          
        />
        <Tab

          style={{backgroundColor: '#5001EE'}}
          label="TASKS"
        />
        <Tab

          style={{backgroundColor: '#5001EE'}}
          label="PROGRESS"
        />
        <Tab

          style={{backgroundColor: '#5001EE'}}
          label="PROJECT INTEGRATIONS"
        />
      </Tabs>
    </div>

  </div>


);

export default TopRight;