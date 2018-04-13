import React, { Component } from 'react';
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

import ItemSection from './ItemSection';
import GridItem from './GridItem';
import Loading from './Loading';
import TheMovieDbApi from '../TheMovieDbApi';


class PopularMoviesItemsSection extends Component{

  constructor() {
   super()
   this.state = {
     items: [],
     itemsHome: [],
     loading: true,
     error: null
   }

   this.api = new TheMovieDbApi()

  }

  componentDidMount() {
    this.setState({
      loading: true,
      error: null,
    })

    const popularesHomeMovies = []

    this.api.getPopularMovies().then(res => {
      const popularesMovies = res.data.results
      //console.log(popularesMovies)

      for (var i = 0; i < 6; i++) {
        popularesHomeMovies.push(popularesMovies[i])
      }
      this.setState({
        items: popularesMovies,
        itemsHome: popularesHomeMovies,
        loading: false
      })
    })
  }
  render(){
    return(
      <div>
        <h5 className="items-section-title">Películas más populares<a href=""><Link to='/peliculas'>Ver todas</Link></a></h5>
        {this.state.loading === true ? <Loading /> : <GridItem title="Películas más populares" items={this.state.itemsHome} /> }
      </div>
    )
  }
}

export default PopularMoviesItemsSection;
