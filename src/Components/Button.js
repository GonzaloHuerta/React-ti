import React from 'react'
import PropTypes from 'prop-types';
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Button = ({type, children}) => (

  <div>
        <a href="peliculas-list.html" className={`btn btn-${type}`} aria-label="#">
        <i className="mdi mdi-heart" aria-hidden="true"></i> {children} </a>
  </div>

)


Button.propTypes = {
  type:  PropTypes.string.isRequired,

};

Button.defaultProps = {
  type: 'primary',
  active: false
};

export default Button
