import React from 'react';
import ListaMascotas from './ListaMascotas';


function Adopcion() {

  return (
    <div>
      <h2>Página de Adopción</h2>
      <p>Bienvenido a la página de adopción. Aquí podrás encontrar información sobre la adopción de mascotas.</p>
      <ListaMascotas mascotas={mascotasParaAdopcion} />
    </div>
  );
}


const mascotasParaAdopcion = [
  { id: 1,
    nombre: 'Jakcson',
    imagen: 'jackson.jpg',
},

{ id: 1,
  nombre: 'Jakcson',
  imagen: 'jackson.jpg',
}

];

localStorage.setItem("mascotasParaAdopcion", JSON.stringify(mascotasParaAdopcion))

export default Adopcion;
