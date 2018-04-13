import React, { Component } from 'react';
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Loading from './Loading';
import Header from './Header'
import TheMovieDbApi from '../TheMovieDbApi';
import GridItem from './GridItem';

class Series extends Component{

  constructor() {
   super()
   this.state = {
     items: [],
     anios: [],
     filterOn: "",
     itemFilter: [],
     loading: true

   }

   this.api = new TheMovieDbApi()

  }

  componentDidMount() {
    const movies = []
    this.api.getPopularMovies().then(res => {
      const resultado = res.data.results

      for (var i = 0; i < res.data.results.length; i++) {
        movies.push(resultado[i])
      }

      this.setState({
        items: movies,
        itemFilter: movies
      })
     })

    const anios = []
    for(let i=1990; i < 2019; i++ ) {
      anios.push(i);
    }
    this.setState({
      anios: anios,
    })

    let filtro = document.getElementById('filter-sort');
    let cambio = (selected) => {

      selected.value === "todas" ? (this.setState({filterOn: "todas"}),
        this.api.getPopularSeries().then(res => {
          const todas = res.data.results
          this.setState({
            itemFilter: todas,
            loading: false
          })
        })):null;

      selected.value === "popuAsc" ? (this.setState({filterOn: "popuAsc"}),
        this.api.filterSeriesPopularityAsc().then(res => {
          const popuAsc = res.data.results
          this.setState({
            itemFilter: popuAsc,
            loading: false
          })
        })):null;

      selected.value === "popuDesc" ? (this.setState({filterOn: "popuDesc"}),
        this.api.filterSeriesPopularityDesc().then(res => {
        const popuDesc = res.data.results
          this.setState({
            itemFilter: popuDesc,
            loading: false
          })
        })):null;

      selected.value === "fechaPriAireDesc" ? (this.setState({filterOn: "lanzPriDesc"}),
        this.api.filterSeriesFirstAirDateDesc().then(res => {
          const fechaPriAireDesc = res.data.results
          this.setState({
            itemFilter: fechaPriAireDesc,
            loading: false
          })
        })):null;

      selected.value === "fechaPriAireAsc" ? (this.setState({filterOn: "lanzPriAsc"}),
        this.api.filterSeriesFirstAirDateAsc().then(res => {
          const fechaPriAireAsc = res.data.results
          this.setState({
            itemFilter: fechaPriAireAsc,
            loading: false
          })
        })):null;

      selected.value === "votPromDesc" ? (this.setState({filterOn: "votPromDesc"}),
        this.api.filterSeriesVoteAverageDesc().then(res => {
          const votPromDesc = res.data.results
          this.setState({
            itemFilter: votPromDesc,
            loading: false
          })
        })):null;

      selected.value === "votPromAsc" ? (this.setState({filterOn: "votPromAsc"}),
        this.api.filterSeriesVoteAverageAsc().then(res => {
          const votPromAsc = res.data.results
          this.setState({
            itemFilter: votPromAsc,
            loading: false
          })
        })) :null;

    }


filtro.addEventListener('change',
function(){
  let selectedOption = this.options[filtro.selectedIndex];
   console.log(selectedOption.value);
  cambio(selectedOption)

// console.log(seleccionada)
})
console.log(this.state.itemFilter)
 }
  render(){

    return(
      <div>

        <Header />
        <div className="py-5 bg-light">

            <div className="container">
                <h1>Series</h1>
                <div className="filters-bar">
                    <div className="filters-bar-left">
                        <select name="filter-year" id="filter-year" className="form-control">
                          <option value="todos">Todos los años</option>
                          {this.state.anios.map((item, i) => {
                            return(
                              <option value="item">{item}</option>
                            )
                          })}
                        </select>
                        <select name="filter-sort" id="filter-sort" className="form-control">
                            <option value="">Ordenar películas por</option>
                            <option value="votPromDesc">Voto promedio (de mayor a menor)</option>
                            <option value="votPromAsc">Voto promedio (de menor a mayor)</option>
                            <option value="fechaPriAireDesc">Fecha de primera emisión (de mayor a menor)</option>
                            <option value="fechaPriAireAsc">Fecha de primera emisión (de menor a mayor</option>
                            <option value="popuDesc">Popularidad (de mayor a menor)</option>
                            <option value="popuAsc">Popularidad (de menor a mayor)</option>
                        </select>
                        <select name="filter-genre" id="filter-genre" className="form-control">
                            <option value="">Géneros</option>
                        </select>
                    </div>
                    <div className="filters-bar-right">
                        <a href="peliculas-grid.html" className="btn btn-light" aria-label="Profile">
                            <i className="mdi mdi-view-grid" aria-hidden="true"></i>
                        </a>
                        <a href="peliculas-list.html" className="btn btn-light active" aria-label="Profile">
                            <i className="mdi mdi-view-list" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>

                {this.state.loading === true ? <Loading /> :
                  <div>
                      {this.state.filterOn === "todas" ? <GridItem items={this.state.itemFilter}/>:null}
                      {this.state.filterOn === "popuAsc" ? <GridItem items={this.state.itemFilter}/>:null}
                      {this.state.filterOn === "popuDesc" ? <GridItem items={this.state.itemFilter}/>:null}
                      {this.state.filterOn === "fechaPriAireDesc" ? <GridItem items={this.state.itemFilter}/>:null}
                      {this.state.filterOn === "fechaPriAireAsc" ? <GridItem items={this.state.itemFilter}/>:null}
                      {this.state.filterOn === "votPromDesc" ? <GridItem items={this.state.itemFilter}/>:null}
                      {this.state.filterOn === "votPromAsc" ? <GridItem items={this.state.itemFilter}/>:null}

                  </div>
                  }
              </div>

          </div>

      </div>
    )
  }
}

export default Series;
