import React, { Component } from 'react';
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class MyListAddButton extends Component{
  render(){
    return(
      <div>
            <a href="peliculas-list.html" className="btn btn-primary" aria-label="#">
            <i className="mdi mdi-heart" aria-hidden="true"></i> Agregar a Mi lista </a>
      </div>
    )
  }
}

export default MyListAddButton;
