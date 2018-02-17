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

const BuildTeam = () => (
  <div className="d-flex flex-wrap">
    <div>
      <h3 className="card-title">Sales Overview</h3>
      <h6 className="card-subtitle">Ample Admin Vs Pixel Admin</h6> </div>
      <div className="ml-auto">
      <ul className="list-inline">
        <li>
          <h6 class="text-muted text-success">
            <i class="fa fa-circle font-10 m-r-10 "></i>
              Ample
          </h6>
        </li>
        <li>
          <h6 class="text-muted  text-info"><i class="fa fa-circle font-10 m-r-10"></i>Pixel</h6>
        </li>
      </ul>
    </div>
  </div>


);

export default BuildTeam;