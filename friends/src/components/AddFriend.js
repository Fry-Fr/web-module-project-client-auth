import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialState = {
    name:'',
    age:'',
    email:'',
    id: Date.now()
}

const AddFriend = ({ setShowForm }) => {
    const [state, setState] = useState(initialState);

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    };

    const submit = (event) => {
        event.preventDefault();
        axiosWithAuth()
        .post('/friends', state)
        .then(res=>{
            setState(initialState);
            setShowForm(false)
            console.log(res.status, res.statusText, 'ADDED NEW FRIEND');
            // window.location.reload();
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return(
        <div className="add-form">
            <form onSubmit={submit}>Add Friend
                <label>Name
                    <input 
                    type='text' 
                    name='name'
                    onChange={handleChange}
                    value={state.name}
                    />
                </label>
                <label>email
                    <input 
                    type='email' 
                    name='email'
                    onChange={handleChange}
                    value={state.email}
                    />
                </label>
                <label htmlFor="age" className="input-age">age
                    <input 
                    type='number' 
                    name='age'
                    onChange={handleChange}
                    value={state.age}
                    />
                </label>
                <button>submit</button>
            </form>
        </div>
    )
}
export default AddFriend;