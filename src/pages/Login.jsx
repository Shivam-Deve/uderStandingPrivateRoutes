import React, { useRef } from 'react'
import useAuth from '../context/AuthContext';
import { useHistory } from 'react-router-dom'
function Login() {
    const history = useHistory()
    const { login, user } = useAuth();
    const name = useRef()
    const handleSubmit = (e) => {
        e.preventDefault();
        login(name.current.value)
    }
    if (user) {
        history.push('/')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form_control">
                    <label htmlFor="name">Name</label>{" : "}
                    <input type="text" id='name' ref={name} />
                </div>
            </form>
        </div>
    )
}

export default Login