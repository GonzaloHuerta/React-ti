import React from 'react';
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

import GridItem from './GridItem';
import Loading from './Loading';
import Empty from './EmptyMoviesAndSeries';

let movies = [
  {
    name: 'Thor Ragnarok',
    view: true,
  },
  {
    name: 'Back to the Future',
    view: false,
  },
  {
    name: 'Robocop',
    view: true,
  },
  {
    name: 'Robocop',
    view: false,
  },
  {
    name: 'Robocop',
    view: true,
  },
  {
    name: 'Robocop',
    view: true,
  },
];

// let viewedMovies = (movies) => {
//   return movies.view === false
// }
//
// console.log(viewedMovies)
//
// let pelisFiltradas = movies.filter(viewedMovies);
// console.log(pelisFiltradas)

const ItemSection = ({loading}) =>

<section className="items-section">
    <div className="items-section-body">
         <div className="row">
           <GridItem />
         </div>
    </div>
</section>

ItemSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  viewAllLink: PropTypes.string.isRequired
};

ItemSection.defaultProps = {
  title: "Peliculas más populares",
  items: movies,
  loading: false,
  viewAllLink: 'http://google.com'
};

export default ItemSection
