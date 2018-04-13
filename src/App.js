import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';

import MyListAddButton from './Components/MyListAddButton';
import MyListRemoveButton from './Components/MyListRemoveButton';
import MyListViewButton from './Components/MyListViewButton';
import GridItem from './Components/GridItem';
import ListItem from './Components/ListItem';
import SearchBox from './Components/SearchBox';
import ItemSection from './Components/ItemSection';
import ViewedItems from './Components/ViewedItems';
import Button from './Components/Button';
import Loading from './Components/Loading';
import PopularMoviesItemsSection from './Components/PopularMoviesItemsSection';
import PrimaryTitle from './Components/PrimaryTitle';
import TheMovieDbApi from './TheMovieDbApi';
import Header from './Components/Header';
import Home from './Components/Home';
import Movies from './Components/Movies';
import Series from './Components/Series';
import EmptyMoviesAndSeries from './Components/EmptyMoviesAndSeries';




class App extends Component {
  render() {

    return(

  <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/peliculas' component={Movies} />
      <Route path='/series' component={Series} />
      <Route path='/mi-lista' component={EmptyMoviesAndSeries} />
    </Switch>
  </div>

    );
  }
}

export default App;
