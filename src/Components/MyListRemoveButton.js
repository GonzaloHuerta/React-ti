import React, { Component } from 'react';
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class MyListRemoveButton extends Component{
  render(){
    return(
      <div>
          <script src="http://cdn.materialdesignicons.com/2.1.19/css/materialdesignicons.min.css"></script>
          <a href="#" className="btn btn-primary" aria-label="Profile">
            <i className="mdi mdi-heart" aria-hidden="true"></i> Quitar
          </a>
      </div>
    )
  }
}

export default MyListRemoveButton;
