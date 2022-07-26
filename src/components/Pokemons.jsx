import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import PokemonItem from './PokemonItem';
import { useNavigate, Link } from 'react-router-dom';

const Pokemons = () => {

    const [characters, setCharacters] = useState([])
    const [type, setType] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=40')//1154 limit
            .then(res => setCharacters(res.data.results))
    
        axios.get(`https://pokeapi.co/api/v2/type/`)
            .then(res => setType(res.data.results))
        }, [])

    const user = useSelector(state => state.user)

    const [searchPokemon, setSearchPokemon] = useState("")

    const search = e => {
        e.preventDefault();
        navigate(`/pokemons/${searchPokemon}`)
    }

    const filterType = e => {
        axios.get(e.target.value)
            .then(res => setCharacters(res.data.pokemon))
    }

    const [page, setPage] = useState(1)
    const pokemonNumbers = 8;
    const lastPage = page*pokemonNumbers;
    const firstPage = lastPage - pokemonNumbers;
    const pokemonPaginated = characters.slice(firstPage, lastPage)
    const last = Math.ceil(characters.length / pokemonNumbers)
    
    let numbers = [];
    for(let i = 1; i <= last; i++){
        numbers.push(i);
    }


    return (
        <div className='pokemons'>
            <Link to="/" className='back' >Go back</Link>
            <div className='text-container'>
                <h1>Welcome trainer <span className='text-red'>{user}</span>! </h1> <br />
                <p>You can try searching pokemon by name or by type</p> <br />
            </div>
            <div className='search-bar'>
                <form onSubmit={search} >
                    <input 
                    type="text" 
                    placeholder='Type name'
                    value={searchPokemon}
                    onChange={e => setSearchPokemon(e.target.value)}
                    />
                    <button>search</button>
                </form>
                <select onChange={filterType} >
                    {type.map(type => (
                        <option value={type.url} key={type.url}>
                            {type.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className='container'>
                    {
                        pokemonPaginated.map(character => (
                            <div key={character.url}>
                                <PokemonItem 
                                pokemonUrl={character.url ? character.url : character.pokemon.url } 
                                key={character.url ? character.url: character.pokemon.url}
                                />
                            </div>
                        ))
                    }
            </div>
            <div className='pagination'>
                <button onClick={() => setPage(page-1)} disabled={page===1}>Previous</button>
                {
                    numbers.map(number => (
                        <button onClick={() => setPage(number)} >{number}</button>
                    ))
                }
                <button onClick={() => setPage(page+1)} disabled={page === last} >Next</button>
            </div>
        </div>
    );
};

export default Pokemons;