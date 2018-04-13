import React, { Component } from 'react';
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

import ItemSection from './ItemSection';
import GridItem from './GridItem';
import Loading from './Loading';
import TheMovieDbApi from '../TheMovieDbApi';

class PopularSeriesItemsSection extends Component{

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

    const popularesHomeSeries = []

    this.api.getPopularSeries().then(res => {
      const popularesSeries = res.data.results
      console.log(popularesSeries)

      for (var i = 0; i < 6; i++) {
        popularesHomeSeries.push(popularesSeries[i])
      }
      this.setState({
        items: popularesSeries,
        itemsHome: popularesHomeSeries,
        loading: false
      })
    })
  }

  render(){
    return(
      <div>
        <h5 className="items-section-title">Series más populares<a href=""><Link to='/series'>Ver todas</Link></a></h5>
        {this.state.loading === true ? <Loading /> : <GridItem items={this.state.itemsHome} /> }
      </div>
    )
  }
}

export default PopularSeriesItemsSection;
