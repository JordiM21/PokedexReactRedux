import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const PokemonItem = ({pokemonUrl}) => {

    const [urlItem, setUrlItem] = useState({})

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(pokemonUrl)
        .then(res => setUrlItem(res.data))
    }, [])

    return (
        <div className='poke-card' onClick={() => navigate(`/pokemons/${urlItem.id}`)} >
            <h1>{urlItem.name}</h1>
            <img src={urlItem.sprites?.front_default} alt="" />
            <h2>XP: {urlItem.base_experience}</h2>
            <h2>height: {urlItem.height}</h2>
        </div>
    );
};

export default PokemonItem;