import React, { Component } from 'react';
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Loading from './Loading';
import Header from './Header'
import TheMovieDbApi from '../TheMovieDbApi';
import GridItem from './GridItem';

class Movies extends Component{

  constructor() {
   super()
   this.state = {
     items: [],
     anios: [],
     filterOn: "",
     itemFilter: [],
     loading: true,
     view: ""

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
        this.api.getPopularMovies().then(res => {
          const todas = res.data.results
          this.setState({
            itemFilter: todas,
            loading: false
          })
        })):null;

      selected.value === "popuAsc" ? (this.setState({filterOn: "popuAsc"}),
        this.api.filterMoviesPopularityAsc().then(res => {
          const popuAsc = res.data.results
          this.setState({
            itemFilter: popuAsc,
            loading: false
          })
        })):null;

      selected.value === "popuDesc" ? (this.setState({filterOn: "popuDesc"}),
        this.api.filterMoviesPopularityDesc().then(res => {
        const popuDesc = res.data.results
          this.setState({
            itemFilter: popuDesc,
            loading: false
          })
        })):null;

      selected.value === "fechaDesc" ? (this.setState({filterOn: "fechaDesc"}),
        this.api.filterMoviesReleaseDateDesc().then(res => {
          const fechaDesc = res.data.results
          this.setState({
            itemFilter: fechaDesc,
            loading: false
          })
        })):null;

      selected.value === "fechaAsc" ? (this.setState({filterOn: "fechaAsc"}),
        this.api.filterMoviesReleaseDateAsc().then(res => {
          const fechaAsc = res.data.results
          this.setState({
            itemFilter: fechaAsc,
            loading: false
          })
        })):null;

      selected.value === "ingrDesc" ? (this.setState({filterOn: "ingrDesc"}),
        this.api.filterMoviesRevenueDesc().then(res => {
          const ingrDesc = res.data.results
          this.setState({
            itemFilter: ingrDesc,
            loading: false
          })
        })):null;

      selected.value === "ingrAsc" ? (this.setState({filterOn: "ingrAsc"}),
        this.api.filterMoviesRevenueAsc().then(res => {
          const ingrAsc = res.data.results
          this.setState({
            itemFilter: ingrAsc,
            loading: false
          })
        })):null;

      selected.value === "lanzPriDesc" ? (this.setState({filterOn: "lanzPriDesc"}),
        this.api.filterMoviesPrimaryReleaseDateDesc().then(res => {
          const lanzPriDesc = res.data.results
          this.setState({
            itemFilter: lanzPriDesc,
            loading: false
          })
        })):null;

      selected.value === "lanzPriAsc" ? (this.setState({filterOn: "lanzPriAsc"}),
        this.api.filterMoviesPrimaryReleaseDateAsc().then(res => {
          const lanzPriAsc = res.data.results
          this.setState({
            itemFilter: lanzPriAsc,
            loading: false
          })
        })):null;

      selected.value === "tituDesc" ? (this.setState({filterOn: "tituDesc"}),
        this.api.filterMoviesOriginalTitleDesc().then(res => {
          const tituDesc = res.data.results
          this.setState({
            itemFilter: tituDesc,
            loading: false
          })
        })):null;

      selected.value === "tituAsc" ? (this.setState({filterOn: "tituAsc"}),
        this.api.filterMoviesOriginalTitleAsc().then(res => {
          const tituAsc = res.data.results
          this.setState({
            itemFilter: tituAsc,
            loading: false
          })
        })):null;

      selected.value === "votPromDesc" ? (this.setState({filterOn: "votPromDesc"}),
        this.api.filterMoviesVoteAverageDesc().then(res => {
          const votPromDesc = res.data.results
          this.setState({
            itemFilter: votPromDesc,
            loading: false
          })
        })):null;

      selected.value === "votPromAsc" ? (this.setState({filterOn: "votPromAsc"}),
        this.api.filterMoviesVoteCountAsc().then(res => {
          const votPromAsc = res.data.results
          this.setState({
            itemFilter: votPromAsc,
            loading: false
          })
        })) :null;

      selected.value === "votTotDesc" ? (this.setState({filterOn: "votTotDesc"}),
        this.api.filterMoviesVoteCountDesc().then(res => {
          const votTotDesc = res.data.results
          this.setState({
            itemFilter: votTotDesc,
            loading: false
          })
        })):null;

      selected.value === "votTotAsc" ? (this.setState({filterOn: "votTotAsc"}),
        this.api.filterMoviesVoteCountAsc().then(res => {
          const votTotAsc = res.data.results
          this.setState({
            itemFilter: votTotAsc,
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

const clickGrid = ()=>{
  this.setState({
    view:"grid",
  })
}

const cickList =() =>{
  this.setState({
    view:"list",
  })
}


 }
  render(){

    return(
      <div>

        <Header />
        <div className="py-5 bg-light">

            <div className="container">
                <h1>Películas</h1>
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
                            <option value="popuDesc">Popularidad (de mayor a menor)</option>
                            <option value="popuAsc">Popularidad (de menor a mayor</option>
                            <option value="fechaDesc">Fecha de lanzamiento (de mayor a menor)</option>
                            <option value="fechaAsc">Fecha de lanzamiento (de menor a mayor</option>
                            <option value="ingrDesc">Ingresos (de mayor a menor)</option>
                            <option value="ingrAsc">Ingresos (de menor a mayor)</option>
                            <option value="lanzPriDesc">Fecha de lanzamiento primaria (de mayor a menor)</option>
                            <option value="lanzPriAsc">Fecha de lanzamiento primaria (de menor a mayor)</option>
                            <option value="tituDesc">Título original (de mayor a menor)</option>
                            <option value="tituAsc">Título original (de menor a mayor)</option>
                            <option value="votPromDesc">Voto promedio (de mayor a menor)</option>
                            <option value="votPromAsc">Voto promedio (de menor a mayor)</option>
                            <option value="votTotDesc">Total de votos (de mayor a menor)</option>
                            <option value="votTotAsc">Total de votos (de menor a mayor)</option>
                        </select>
                        <select name="filter-genre" id="filter-genre" className="form-control">
                            <option value="">Géneros</option>
                        </select>
                    </div>
                    <div className="filters-bar-right">
                        <a href="peliculas-grid.html" className="btn btn-light" aria-label="Profile" onclick="clickGrid()">
                            <i className="mdi mdi-view-grid" aria-hidden="true"></i>
                        </a>
                        <a href="peliculas-list.html" className="btn btn-light active" aria-label="Profile" id="list" onclick="clickList()">
                            <i className="mdi mdi-view-list" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>

                {this.state.loading === true ? <Loading /> :
                  <div>
                      {this.state.filterOn === "todas" ? <GridItem items={this.state.itemFilter}/>:null}
                      {this.state.filterOn === "popuAsc" ? <GridItem items={this.state.itemFilter}/>:null}
                      {this.state.filterOn === "popuDesc" ? <GridItem items={this.state.itemFilter}/>:null}
                      {this.state.filterOn === "fechaDesc" ? <GridItem items={this.state.itemFilter}/>:null}
                      {this.state.filterOn === "fechaAsc" ? <GridItem items={this.state.itemFilter}/>:null}
                      {this.state.filterOn === "ingrDesc" ? <GridItem items={this.state.itemFilter}/>:null}
                      {this.state.filterOn === "ingrAsc" ? <GridItem items={this.state.itemFilter}/>:null}
                      {this.state.filterOn === "lanzPriDesc" ? <GridItem items={this.state.itemFilter}/>:null}
                      {this.state.filterOn === "lanzPriAsc" ? <GridItem items={this.state.itemFilter}/>:null}
                      {this.state.filterOn === "tituDesc" ? <GridItem items={this.state.itemFilter}/>:null}
                      {this.state.filterOn === "tituAsc" ? <GridItem items={this.state.itemFilter}/>:null}
                      {this.state.filterOn === "votPromDesc" ? <GridItem items={this.state.itemFilter}/>:null}
                      {this.state.filterOn === "votPromAsc" ? <GridItem items={this.state.itemFilter}/>:null}
                      {this.state.filterOn === "votTotDesc" ? <GridItem items={this.state.itemFilter}/>:null}
                      {this.state.filterOn === "votTotAsc" ? <GridItem items={this.state.itemFilter}/>:null}
                  </div>
                  }
              </div>
            }
          </div>

      </div>
    )
  }
}

export default Movies;
