import React, {Fragment} from 'react';
import { Helmet } from 'react-helmet';
import {BiCube} from 'react-icons/bi';
 import { Link } from 'react-router-dom';

const Home = () => (
  <Fragment>
  {/* Helmet tag changes the title of the tab */}
    <Helmet><title>Quiz App - Home</title></Helmet> 
    <div id="home" >
      <section>
        <div>
            <BiCube size=' 48px'/>
        </div>
        <h1>Quiz App</h1>
        <div className='play-buttun-container'>
          <ul>
            <li><Link to="/play/instructions">Play</Link></li>
          </ul>
        </div>
        <div className='auth-container'>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
          
        </div>

      </section>
    </div>
  </Fragment>

  );

export default Home;