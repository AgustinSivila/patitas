import React from 'react';
import jacksonimagen from './jackson.jpg';

function ListaMascotas({ mascotas }) {
    return (
      <div className="row">
        {mascotas.map((mascota) => (
          <div className="col-md-4 mb-4" key={mascota.id}>
            <div className="card">
              <img src={jacksonimagen} className="card-img-top" alt={mascota.nombre} />
              <div className="card-body">
                <h5 className="card-title">{mascota.nombre}</h5>
                <p className="card-text">{mascota.descripcion}</p>
                {/* Otros detalles de la mascota */}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  

export default ListaMascotas;
