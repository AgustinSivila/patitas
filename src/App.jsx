import React, { useRef } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import olgaImage from './olga.jpg';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Adopcion from "./Adopcion"

import Transito from "./Transito"
import { Link } from "react-router-dom";



function CardGroup() {
  return (
    <div className="card-group">
      <div className="card">
        <img src= {olgaImage} className="card-img-top " alt="Olga" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div className="card">
      <img src= {olgaImage} className="card-img-top" alt="Olga" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div className="card">
      <img src= {olgaImage} className="card-img-top" alt="Olga" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  );
}


function App() {
  const myRef = useRef(null);
  return (
    <Router>
    <div className="App">
    <Link to="/" className="navbar-brand ">
         PATITAS
         </Link>
      <p>Bienvenido a Patitas, el lugar para encontrar a tu hijo peludo</p>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <Link to="/adopcion"  className="adopcion"> 
        Adopción
         </Link>
         
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Adopcion" >Dar en adopcion</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Transito">Ser transito</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Nosotros
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/A" >Action</a></li>
                  <li><a className="dropdown-item"href="/A" >Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/A">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
              <span className="nav-link disabled" aria-disabled="true">{' '}</span>


              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <Routes>
      
  <Route exact path="/" element={<CardGroup />} />
  <Route path="/adopcion" element={<Adopcion />} />
  <Route path="/transito" element={<Transito />} />
</Routes>


     
      
    </div>
    </Router>
  );
}




export default App;
