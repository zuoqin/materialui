import React from 'react';

import BuildTeam from './BuildTeam';
import Production from './Production';
import ProjectLink from './ProjectLink';
import TimeManage from './TimeManage';
import Members from './Members';
import Issues from './Issues';
import BottomRight from './BottomRight';

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

const style = {margin: 5}; 
const members = [{name: 'Damian Jacobs', desc: 'Designer', rate: 10, time: '4:21 PM'},
  {name: 'Lora Parker', desc: 'PHP Coder', rate: 5, time: '11:39 PM'},
  {name: 'Carla Michele', desc: 'SMM', rate: 8, time: '10:39 PM'},
  {name: 'Grag Swan', desc: 'SEO', rate: 7, time: '1:39 PM'},
  {name: 'Elnora Duglas', desc: 'Clojure Programmer', rate: 25, time: '14:39 PM'}
  ];

const artifacts =[{name: 'Add Staging'}, {name: 'Add Git Repository'}, {name: 'Add cPanel'},
  {name: 'Add Zeplin URL'}, {name: 'Add SSH'}, {name: 'Add Invision URL'}, {name: 'Add wiki block'}
]

const RightSide = () => (
  <div className="page-wrapper">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-1 col-md-1">
        </div>
        <div className="col-lg-6 col-md-6 col-md-offset-1 col-lg-offset-1"
          style={{marginTop: '10px'}}
          >
          <div className="card">
            <div className="card-block"
              style={{paddingTop: '5px'}}
              >
              <div className="row">
                <div className="col-12">
                  <div className="d-flex flex-wrap">
                    <BuildTeam />                  
                  </div>
                </div>
                <div className="col-12">
                  <div className="amp-pxl" style={{height: '10px'}}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-block">
              <div className="row">
                <div className="col-12">
                  <div className="d-flex flex-wrap">
                    <ProjectLink />                  
                  </div>
                </div>
                <div className="col-12">
                  <div className="amp-pxl" style={{height: '10px'}}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-block">
              <div className="row">
                <div className="col-12">
                  <div className="d-flex flex-wrap">
                    <Production />                  
                  </div>
                </div>
                <div className="col-12">
                  <div className="amp-pxl" style={{height: '10px'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="col-lg-5 col-md-5"
          style={{marginTop: '10px'}}
        >

          <div className="card">
            <div className="card-block"
              style={{paddingLeft: '15px',
                paddingRight: '15px',
                paddingBottom: '0px'
              }}
              >
              <TimeManage 
                times= {['13:11:45', '10:12:56', '01:03:25']}
              />
            </div>
          </div>

          <div className="card">
            <div className="card-block"
              style={{paddingTop: '5px'}}
              >
              <Members 
                members= {members}

              />
            </div>
          </div>


          <div className="card">
            <div className="card-block">
              <Issues />
            </div>
          </div>

          <BottomRight 
            artifacts={artifacts}
          />
        </div>
      </div>
    </div>
  </div>
);

export default RightSide;