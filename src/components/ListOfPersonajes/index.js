import React from 'react'

import UsePersonajes    from '../../hooks/usePersonajes'
import Personaje        from '../Personaje/index'
import './style.css'

export default function ListOfPersonajes({keyword}){
    const {loading, personajes} = UsePersonajes({keyword})
    if(loading){
        return(
            <div className='center'>
                <div className='spinner'></div>
            </div>
        )
    }else{
        if(!personajes){
            return (
                <div className='center'>
                    <h1>No se econtraron resultados</h1>
                </div>
            )
        }
        return (
            <div className='cards'>
            {
                personajes.map(({id, name, gender, image, species, status}) => {
                    return (
                            <Personaje
                                key={id}
                                id={id}
                                image={image}
                                nombre={name}
                                genero={gender}
                                especie ={species}
                                status={status}
                            />
                    )
                })
            }
            </div>
        )
    }
}