import React, { Component } from 'react';
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import GridItem from './GridItem';
import MyListAddButton from './MyListAddButton';
import Button from './Button';
import PropTypes from 'prop-types';


class ListItem extends Component {
  render() {
    return(
      <section class="items-section">
          <div class="items-section-body">
            
              <div class="row">
                  <article class="col-md-6">
                      <div class="list-item">
                          <div class="list-item-img">
                              <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" alt="Movie Image" class="img-fluid" />
                          </div>
                          <div class="list-item-body">
                              <h3 class="list-item-title">Thor: Ragnarok</h3>
                              <div class="list-item-description">
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis consequuntur corporis distinctio doloremque, eum expedita id in ipsam minus modi molestias optio perferendis quam quas repudiandae sint. Suscipit, veritatis!</p>
                              </div>
                              <div class="list-item-actions">
                                  <a href="peliculas-list.html" class="btn btn-primary" aria-label="Profile">
                                      <i class="mdi mdi-delete" aria-hidden="true"></i> Quitar
                                  </a>
                                  <a href="peliculas-list.html" class="btn btn-primary" aria-label="Profile">
                                      <i class="mdi mdi-eye-outline" aria-hidden="true"></i> Marcar como vista
                                  </a>
                              </div>
                          </div>
                      </div>

                  </article>

              </div>

          </div>

      </section>

    );
  }
}

ListItem.propTypes = {
  alt: PropTypes.string.isRequired,
  clase: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

ListItem.defaultProps = {
  alt: 'Movie Image',
  clase: 'img-fluid',
  items: [],
};

export default ListItem;
