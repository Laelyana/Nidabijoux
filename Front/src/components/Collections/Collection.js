// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './collections.scss';

const Collection = ({ name, picture }) => (
  
  <div className="col col__img cat__img--un">
  <div className="col__center">
  <div className="col-card--title-band"><Link to={`/${name}`} />{name}</div></div>
  <img  className="col-card" src={`http://0.0.0.0:8000/pictures/` + picture} alt="" />
  </div>
);
Collection.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Collection;



