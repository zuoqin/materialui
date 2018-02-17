import React from 'react';

import BuildTeam from './BuildTeam';

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

const style = {margin: 5}; 

const RightSide = () => (
  <div className="page-wrapper">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8 col-md-7">
          <div className="card">
            <div className="card-block">
              <div className="row">
                <div className="col-12">
                  <div className="d-flex flex-wrap">
                    <BuildTeam />
                  </div>
                </div>
                <div className="col-12">
                  <div className="amp-pxl" style={{height: '360px'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RightSide;