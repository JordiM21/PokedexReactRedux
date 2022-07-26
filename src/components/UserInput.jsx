import React, { useState } from 'react';
import { changeUser } from '../store/slices/user.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import Ash from "../assets/Ash.png"


const UserInput = () => {

    const [userName, setUserName] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = e => {
        e.preventDefault()
        dispatch(changeUser(userName))
        navigate("/pokemons")
    }

    return (
        <div className='input'>
            <h1 className='text-red'>Hello trainer!</h1>
            <img className='ash' src={Ash} alt="" />
            <p><strong>Please, give me your name to start</strong></p> <br />
            <form className='form' onSubmit={submit} >
                <input 
                type="text" 
                placeholder='Enter your name'
                value={userName}
                onChange={e => setUserName(e.target.value)}
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default UserInput;