import React from 'react';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import Header from './Header';
import PopularMoviesItemsSection from './PopularMoviesItemsSection';
import PopularSeriesItemsSection from './PopularSeriesItemsSection';

const Home = () =>
<div>
  <Header />

  <main role="main">
      <div className="py-5 bg-light">
          <div className="container">
              <section className="items-section">
                  <h5 className="items-section-title">Mi Lista <a href=""><Link to='/mi-lista'>Ver todas</Link></a></h5>
                  <div className="items-section-body">
                      <div className="row">
                          <article className="col-md-2">
                              <a href="detalle.html" className="grid-item">
                                  <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" alt="Movie Image" className="img-fluid" />
                                  <span className="grid-item-body">
                                      <span className="grid-item-title">Thor: Ragnarok</span>
                                      <span className="grid-item-date">October 25, 2017</span>
                                  </span>
                              </a>
                          </article>
                          <article className="col-md-2">
                              <a href="detalle.html" className="grid-item">
                                  <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" alt="Movie Image" className="img-fluid" />
                                  <span className="grid-item-body">
                                      <span className="grid-item-title">Thor: Ragnarok</span>
                                      <span className="grid-item-date">October 25, 2017</span>
                                  </span>
                              </a>
                          </article>
                          <article className="col-md-2">
                              <a href="detalle.html" className="grid-item">
                                  <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" alt="Movie Image" className="img-fluid" />
                                  <span className="grid-item-body">
                                      <span className="grid-item-title">Thor: Ragnarok</span>
                                      <span className="grid-item-date">October 25, 2017</span>
                                  </span>
                              </a>
                          </article>
                          <article className="col-md-2">
                              <a href="detalle.html" className="grid-item">
                                  <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" alt="Movie Image" className="img-fluid" />
                                  <span className="grid-item-body">
                                      <span className="grid-item-title">Thor: Ragnarok</span>
                                      <span className="grid-item-date">October 25, 2017</span>
                                  </span>
                              </a>
                          </article>
                          <article className="col-md-2">
                              <a href="detalle.html" className="grid-item">
                                  <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" alt="Movie Image" className="img-fluid" />
                                  <span className="grid-item-body">
                                      <span className="grid-item-title">Thor: Ragnarok</span>
                                      <span className="grid-item-date">October 25, 2017</span>
                                  </span>
                              </a>
                          </article>
                          <article className="col-md-2">
                              <a href="detalle.html" className="grid-item">
                                  <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" alt="Movie Image" className="img-fluid" />
                                  <span className="grid-item-body">
                                      <span className="grid-item-title">Thor: Ragnarok</span>
                                      <span className="grid-item-date">October 25, 2017</span>
                                  </span>
                              </a>
                          </article>
                      </div>
                  </div>
              </section>
              <PopularMoviesItemsSection />
              <PopularSeriesItemsSection />
          </div>
      </div>

  </main>
</div>

export default Home
