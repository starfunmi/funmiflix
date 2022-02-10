import React from 'react';
import './home.scss'
import { Link } from 'react-router-dom'
const Home = () => {
  return <section className="banner">
        <div className="banner-box">
          <h3>Welcome to FunmiFlix </h3>

          <Link style={{textDecoration: "none"}} to="/users"> <h3 className="btn-text">Access Movie Gallery</h3> </Link>
          
         
        </div>

       
        
  </section>;
};

export default Home;
