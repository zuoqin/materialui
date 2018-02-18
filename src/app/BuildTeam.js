import React from 'react';
import ActionEdit from 'material-ui/svg-icons/image/edit';
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

const BuildTeam = () => (
  <div className="d-flex flex-wrap">
    <div>
      <div className="row">
        <div className="col-md-10"
          style={{paddingTop: '30px'}}
          >
          <h2 className="card-title">BuildTeam</h2>
        </div>
        <div className="col-md-2">

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
            <ActionEdit />
          </IconButton>   
        </div>
      </div>

      
      <h6 className="card-subtitle">New Project</h6>
      



      <h6 className="card-subtitle">Web Site URL</h6>
      <h5 className="card-title">http://sberpb.com:8080</h5>


      <h6 className="card-subtitle">Skills requested</h6>
      <h5 className="card-title">Design and Development</h5>

      <h6 className="card-subtitle">Client information</h6>

      <div className="row">
        <div className="col-md-6">
          <p> <h5 className="card-title">Lex Mustafin</h5> </p>
          <p> <h5 className="card-title">+ 1765 65 67567</h5> </p>
        </div>

        <div className="col-md-6">
          <p> <h5 className="card-title">Moscow Belomorodova</h5> </p>
          <p> <h5 className="card-title">141006 (GMT +3) </h5> </p>


        </div>

      </div>

      <h6 className="card-subtitle" style={{marginTop: '15px'}}>Project description</h6>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar a sem non tincidunt.
          Integer efficitur sapien a fringilla faucibus. Suspendisse a feugiat mi. Proin auctor a neque id ornare.
          Cras eleifend eros et rutrum porttitor. Vestibulum tellus urna, facilisis at ullamcorper vel, fringilla ac nunc.
          Fusce pulvinar mauris ac erat suscipit porta. Nunc dignissim nisi non ligula accumsan laoreet.
          Maecenas ut scelerisque metus, vel interdum lectus. Cras sit amet condimentum felis, sed ornare sapien.
          Morbi dictum interdum convallis. Nullam porta luctus orci, eget sollicitudin lectus.
          Vivamus urna orci, ornare in ultrices eget, efficitur at nunc.
        </p>
        <p>
          Quisque consequat elit non felis dignissim mattis. Nunc id massa eu odio suscipit sollicitudin.
          Nulla massa sapien, sollicitudin ac sagittis sit amet, maximus ut eros. Praesent congue, ligula eget auctor ultrices,
          lectus urna dapibus diam, a consectetur elit sem et dui. In ullamcorper ex elit, vel fringilla odio bibendum id.
          Nam scelerisque nisl vel nisi ultricies venenatis. Ut et aliquet nunc. In quis mollis erat. Sed tellus lectus, euismod
          vitae luctus sit amet, bibendum id eros. Fusce augue risus, vehicula sit amet elit vel, tempus lobortis justo.
          In sed ultricies massa. Vestibulum neque odio, egestas vitae commodo a, tempus vel urna. <a href="#"> Read more </a>
        </p>

      </div>

    </div>
  </div>


);

export default BuildTeam;