import React, { Component } from 'react';
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import TheMovieDbApi from '../TheMovieDbApi';
import {Link} from 'react-router-dom'

class GridItem extends Component{
  render() {
    return(
      <section className="items-section">
          <div className="items-section-body">
            <div className="row">
            {this.props.items.map((item, i) => {
              return(
            <article className="col-md-2">
                <a className="grid-item">
                    <img src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${item.poster_path}`} alt={this.props.alt} className={this.props.clase} />
                    <span className="grid-item-body">
                        <span className="grid-item-title">{item.title ? item.title : item.name}</span>
                        <span className="grid-item-date">{item.release_date ? item.release_date : item.first_air_date}</span>
                    </span>
                </a>
            </article>
            )
            })}
          </div>
          </div>
        </section>
    );
  }
}

GridItem.propTypes = {
  alt: PropTypes.string.isRequired,
  clase: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

GridItem.defaultProps = {
  alt: 'Movie Image',
  clase: 'img-fluid',
  items: [],
};

export default GridItem
