import React, { useState } from 'react';
import axios from 'axios';

const initialState = {
    credentials:{
        username:'',
        password:''
    }
}

const Login = (props) => {
    const [ state, setState ] = useState(initialState);

    const handleChange = (event)=>{
        setState({
            credentials: {
              ...state.credentials,
              [event.target.name]: event.target.value
            }
          });
    }

    const login = (event)=>{
        event.preventDefault();
        axios.post('http://localhost:5000/api/login', state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        window.location.href = '/friends'
      })
      .catch(err => {
        console.log(err);
      })
    }

    return (
        <div>
        <form onSubmit={login}>
          <label>username
          <input
            type="text"
            name="username"
            value={state.credentials.username}
            onChange={handleChange}
          />
          </label>
          <label>password
          <input
            type="password"
            name="password"
            value={state.credentials.password}
            onChange={handleChange}
          />
          </label>
          <button>Log in</button>
        </form>
      </div>
    )
}
export default Login;