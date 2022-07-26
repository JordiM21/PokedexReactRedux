import { useState } from 'react'
import './App.css'
import { HashRouter, Route, Routes } from "react-router-dom";
import Pokemons from './components/Pokemons';
import UserInput from './components/UserInput';
import PokemonDetail from './components/PokemonDetail';
import ProtectedRoutes from './components/ProtectedRoutes';
import NavBar from './components/NavBar';

function App() {

  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<UserInput />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/pokemons' element={<Pokemons />} />
          <Route path='/pokemons/:id' element={<PokemonDetail />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
