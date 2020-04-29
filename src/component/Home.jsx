import React from "react";
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
/* import PropTypes from "prop-types"; */

const Home = (props) =>{
  return (
  <div className="TitleHome">
      <img src="..." class="rounded mx-auto d-block" alt="..."></img>
      <h1>Travel Culture</h1>
      <h2>Echappes toi avec nous grâce aux différents voyages <br/> à travers le monde de la culture</h2>
      <Button  tag={Link} to="/categories" outline color="primary"> En route !</Button>

  </div>
  );
}

export default Home;