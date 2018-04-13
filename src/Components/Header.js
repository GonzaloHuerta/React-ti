import React from 'react';
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

const Header = () =>

<header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link className="navbar-brand" to='/'>React Movie DB APP</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample07">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <Link className="nav-link" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to='/peliculas'>Películas</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to='/series'>Series</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="mi-lista-grid.html" to='/mi-lista'>Mi Lista <span className="badge badge-danger">3</span></Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-md-0" action="busqueda-peliculas-grid.html">
                    <input className="form-control" type="text" placeholder="Buscar Película o Serie" aria-label="Search" />
                </form>
            </div>
        </div>
    </nav>
</header>

export default Header
