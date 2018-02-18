import React, { Component } from 'react'
import BottomArtifact from './BottomArtifact';
import IconButton from 'material-ui/IconButton';


const style = {margin: 5}; 

export default class BottomRight extends Component {
  renderPiece(value, index) {
    return (       

        <BottomArtifact 
          name={value.name}
          key={index}
          ind={index}
        />

    )
  }


  renderList() {
    let a = this
    return this.props.artifacts.map((value, index) => {
      return a.renderPiece(value, index)
    })
  }

   render() {
    return (
      <div
        style={{justifyContent: 'left', textAlign: 'justify', display: 'flex', flexWrap: 'wrap', width: '100%'}}
        >
        {this.renderList()}
      </div>
    )};
}
