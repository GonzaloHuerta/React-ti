import React, { Component } from 'react';
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class SearchBox extends Component {
  render(){
    return(
      <div>
        <form class="form-inline my-2 my-md-0" action="busqueda-peliculas-grid.html">
            <input class="form-control" type="text" placeholder="Buscar Película o Serie" aria-label="Search" />
        </form>
      </div>
    )
  }
}

export default SearchBox
