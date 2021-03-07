import React, { useState }  from 'react';

import rickAndMorty         from './rickAndMorty.png'
import ListOfPersonajes     from '../ListOfPersonajes/index'
import './style.css';

export default function Home(){
    const [keyword, setKeyword] = useState('')
    const handleChange = e => {
        const namePersonaje = e.target.value
        setKeyword(namePersonaje)
    }
    return (
        <div className='container'>
            <div className='title'>
                <img src={rickAndMorty} alt='Rick and Morty' />
            </div>
            <div className='input'>
                <input type='text' placeholder='Escribe aquí tu personaje' onChange={handleChange} />
            </div>
            <div className='main'>
                <ListOfPersonajes keyword={keyword} />
            </div>
        </div>
    )
}