import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Details = ({ country }) => {
  const { name, flags } = country;
  const { common } = name;
  return (
    <div className="det-cont">
      <NavLink to={`/details/${common}`} className="navlink">
        <div className="arrow-icon"><FontAwesomeIcon icon={faArrowRight} /></div>
        <div className="details">
          <div className="details-inner">
            <img src={flags.png} alt="" className="flags" />
            <h4>{name.official}</h4>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Details;

Details.propTypes = {
  country: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};
