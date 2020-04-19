import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//import BackgroundCarousel from './components/layout/carousel';

class Landing extends Component {
  render() {
    return (
      
      <div className="landing">
        
        {/*<div className="container">*/}
        <div id="backgroundCarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              {/*Photo by Jack Church on Unsplash*/}
            <img className="d-block w-100" src="https://source.unsplash.com/jKGFqL3llv0/1600x900" alt="First slide" />
            </div>
            <div className="carousel-item">
              {/*Photo by Chronis Yan on Unsplash*/}
            <img className="d-block w-100" src="https://source.unsplash.com/aDFJ5Fm50IA/1600x900" alt="Second slide" />
            </div>
            <div className="carousel-item">
              {/*Photo by Anders Jildén on Unsplash*/}
              <img className="d-block w-100" src="https://source.unsplash.com/uwbajDCODj4/1600x900"
              alt="Third slide" />
            </div>
          </div>
          </div>




        {/* {/* -----  Indicators  -----
        <ol className="carousel-indicators">
          <li data-target="#backgroundCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#backgroundCarousel" data-slide-to="1"></li>
        </ol>

        {/*----- Wrapper for slides -----
        <div className="carousel-inner">
          <div className="item active">
            <img 
            src="https://source.unsplash.com/jKGFqL3llv0/2400x1600" style={{backgroundSize: "cover", backgroundPosition: "center"}} />
          </div>
          <div className="item">
            <img 
            src="https://source.unsplash.com/jKGFqL3llv0/2400x1600" 
            style={{backgroundSize: "cover", backgroundPosition: "center"}} />
          </div>
        </div>

        {/*----- Left and right controls -----
        <a className="left carousel-control" href="backgroundCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="backgroundCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      </div> */}




      <div className="dark-overlay landing-inner text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-3 mb-4">Developer Connector
              </h1>
              <p className="lead"> Create a developer profile/portfolio, share posts and get help from other developers</p>
              <hr />
              <Link to="/register" className="btn btn-lg btn-info mr-2">Sign Up</Link>
              <Link to="/login" className="btn btn-lg btn-light">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    )
  }
}

export default Landing;
