import React from 'react'

import './style.css'

export default function Personaje({id, nombre, image, genero, especie, status}){
  const generos = {
    Male: 'Hombre',
    Female: 'Mujer',
    unknown: 'Desconocido',
    alien: 'Alienigena'
  }
  const statuses = {
    Alive: 'Vivo',
    Dead: 'Muerto',
    unknown: 'Desconocido',
  }
    return (
        <div className='card' key={id}>
          <div className='card__image-container'>
            <img
              src={image}
              alt={nombre}
            />
          </div>
          <div class=''>
            <ul>
              <li className='name'><u><b>{nombre}</b></u></li>
              <li className='specie'><b className={status}>{statuses[status]}</b> - {especie}</li>
              <li><small>{generos[genero]}</small></li>
            </ul>
          </div>
        </div>
    )
}