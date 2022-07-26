import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const PokemonDetail = () => {

    const [character, setCharacter] = useState({})

    const { id } = useParams();

    useEffect(() => {
       axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => setCharacter(res.data)) 
    }, [ id ])

    console.log(character.moves)
    return (
        <>
            <Link className='back' to="/pokemons" >Go back</Link>
        <div className='container-detail'>    
            <img className='img-absolute' src={character.sprites?.other?.dream_world?.front_default} alt="" />
            <h1 className='text-red'>{character.name ? character.name : "nothing to show over here, you probably wrote an incorrect name, however you can try searching: bulbasaur, pikachu, charmander, ivysaur or meowth" }</h1>
            <div className='container stats-description'>
                <h2>#{character.id}</h2>
                <h2>XP: {character.base_experience}</h2>
                <h2>height: {character.height}</h2>
                <h2>weight: {character.weight}</h2>
            </div>
            <div className='container'>
                <div className='big-font card'>
                    <h3 className='text-red'>ABILITIES</h3>
                    <p>{character.abilities?.[0]?.ability?.name}</p>
                    <p>{character.abilities?.[1]?.ability?.name}</p>
                </div>
                <div className='big-font card'>
                    <h3 className='text-red'>TYPES</h3>
                    <p>{character.types?.[0]?.type?.name}</p>
                    <p>{character.types?.[1]?.type?.name}</p>
                </div>
            </div>
            <div className='container stats'>
                <div>
                    <img src={character?.sprites?.other?.home?.front_default} alt="" />
                </div>
                <div>
                    <h2 className='text-red'>STATS</h2>
                        {
                            character.stats?.map(char => (
                                <div className='big-font stats-container'>
                                    <strong>{char.stat.name}: </strong>
                                    <span>{char.base_stat}</span>
                                </div>
                            ))
                        }
                </div>
            </div>
            <h1 className='text-red'>Moves:</h1>
            <div className='move-container'>
            {
                character.moves?.map(move => (
                    <div className='move-card' key={move.move.url}>
                        <p>{move.move.name}</p>
                    </div>
                ))
            }
            </div>
            
        </div>
        </>
        
    );
};

export default PokemonDetail;