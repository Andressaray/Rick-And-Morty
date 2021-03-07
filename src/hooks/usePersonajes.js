import {useEffect, useState} from 'react';

import getPersonajes from '../services/index';

export default function UsePersonajes({ keyword }) {
    const [loading, setLoading]         = useState(false)
    const [personajes, setPersonajes]   = useState([])
    useEffect(() => {
        setLoading(true)
        getPersonajes({keyword})
            .then(personajes => {
                setLoading(false)
                setPersonajes(personajes)
            })
    }, [keyword])
    return { personajes, loading}
}