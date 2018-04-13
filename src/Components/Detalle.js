import React from 'react';
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
this.api.getPopularMovies().then(res => {
  const popularesMovies = res.data.results

const Detalle = ({match}) => {
  const detalle = popularesMovies.find(detalle=>detalle.id==match.params.id)
    return detalle ? (



  <main role="main">
    <Header />
      <div class="py-5 bg-light">
          <div class="container">
              <section class="detail-section">
                  <div class="row">
                      <div class="col-md-4">
                          <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" alt="Movie Image" class="img-fluid" />
                      </div>
                      <div class="col-md-8">
                          <h1>{detalle.title} <span>(2017)</span></h1>
                          <div>
                              <h3>Overview</h3>
                              <p>Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the prophecy of destruction to his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.</p>
                          </div>
                          <br />
                          <br />
                          <br />
                          <div>
                              <h3>Featured Crew</h3>
                              <div class="row">
                                  <div class="col-md-4">
                                      <h5>Taika Waititi</h5>
                                      <p>Director</p>
                                  </div>
                                  <div class="col-md-4">
                                      <h5>Taika Waititi</h5>
                                      <p>Director</p>
                                  </div>
                                  <div class="col-md-4">
                                      <h5>Taika Waititi</h5>
                                      <p>Director</p>
                                  </div>
                                  <div class="col-md-4">
                                      <h5>Taika Waititi</h5>
                                      <p>Director</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>

              <section class="items-section">
                  <h5 class="items-section-title">Recomendaciones</h5>
                  <div class="items-section-body">
                      <div class="row">
                          <article class="col-md-2">
                              <a href="detalle.html" class="grid-item">
                                  <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" alt="Movie Image" class="img-fluid" />
                                  <span class="grid-item-body">
                                      <span class="grid-item-title">Thor: Ragnarok</span>
                                      <span class="grid-item-date">October 25, 2017</span>
                                  </span>
                              </a>
                          </article>
                          <article class="col-md-2">
                              <a href="detalle.html" class="grid-item">
                                  <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" alt="Movie Image" class="img-fluid" />
                                  <span class="grid-item-body">
                                      <span class="grid-item-title">Thor: Ragnarok</span>
                                      <span class="grid-item-date">October 25, 2017</span>
                                  </span>
                              </a>
                          </article>
                          <article class="col-md-2">
                              <a href="detalle.html" class="grid-item">
                                  <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" alt="Movie Image" class="img-fluid" />
                                  <span class="grid-item-body">
                                      <span class="grid-item-title">Thor: Ragnarok</span>
                                      <span class="grid-item-date">October 25, 2017</span>
                                  </span>
                              </a>
                          </article>
                          <article class="col-md-2">
                              <a href="detalle.html" class="grid-item">
                                  <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" alt="Movie Image" class="img-fluid" />
                                  <span class="grid-item-body">
                                      <span class="grid-item-title">Thor: Ragnarok</span>
                                      <span class="grid-item-date">October 25, 2017</span>
                                  </span>
                              </a>
                          </article>
                          <article class="col-md-2">
                              <a href="detalle.html" class="grid-item">
                                  <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" alt="Movie Image" class="img-fluid" />
                                  <span class="grid-item-body">
                                      <span class="grid-item-title">Thor: Ragnarok</span>
                                      <span class="grid-item-date">October 25, 2017</span>
                                  </span>
                              </a>
                          </article>
                          <article class="col-md-2">
                              <a href="detalle.html" class="grid-item">
                                  <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" alt="Movie Image" class="img-fluid" />
                                  <span class="grid-item-body">
                                      <span class="grid-item-title">Thor: Ragnarok</span>
                                      <span class="grid-item-date">October 25, 2017</span>
                                  </span>
                              </a>
                          </article>
                      </div>
                  </div>
              </section>

          </div>
      </div>

  </main>
) :null

export default Detalle
