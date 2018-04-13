import React, { Component } from 'react';
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import GridItem from './GridItem';
import ListItem from './ListItem';

class ViewedItems extends Component {
  render(){

    let movies = [
      {
        name: 'Thor Ragnarok',
        viewed: true,
      },
      {
        name: 'Back to the Future',
        viewed: true,
      },
      {
        name: 'Robocop',
        viewed: false,
      },
    ];

    let viewedMovies = (movies) => {
      return movies.viewed === true
    }

    let pelisFiltradas = movies.filter(viewedMovies);

    return(
      <div className="row">
        {pelisFiltradas.map((item, i) => {
            return <ListItem />
            })}
      </div>

    )
  }
}

export default ViewedItems
