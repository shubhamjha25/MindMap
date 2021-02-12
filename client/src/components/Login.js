import React, { useState } from 'react';
import axios from 'axios';

function Login({setIsLogin}) {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [err, setErr] = useState('');

    const onChangeInput = e => {
        const { name, value } = e.target;
        setUser({...user, [name]:value});
        setErr('');
    }

    const registerSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('/users/register', {
                username: user.name,
                email: user.email,
                password: user.password
            });
            setUser({name: '', email: '', password: ''});
            setErr(res.data.msg);
        } catch (err) {
            err.response.data.msg && setErr(err.response.data.msg)
        }
    }

    const loginSubmit = async e =>{
        e.preventDefault()
        try {
            const res = await axios.post('/users/login',{
                email: user.email,
                password: user.password
            });
            setUser({name: '', email: '', password: ''});
            localStorage.setItem('tokenStore', res.data);
            setIsLogin(true);
        } catch (err) {
            err.response.data.msg && setErr(err.response.data.msg)
        }
    }

    return(
        <section>
            <div className="login">
                <h2>Login</h2>
                <form onSubmit={loginSubmit}>
                    <input type="email" name="email" id="login-email" placeholder="Email" required value={user.email} onChange={onChangeInput} />
                    <input type="password" name="password" id="login-password" placeholder="Password" required value={user.password} autoComplete="true" onChange={onChangeInput} />
                
                    <button type="submit">Login</button>
                    <p>New to MindMap? 
                        <span> Create an Account!</span>
                    </p>
                    <h3>{err}</h3>
                </form>
            </div>

            <div className="register">
                <h2>Register</h2>
                <form onSubmit={registerSubmit}>
                    <input type="text" name="name" id="register-name" placeholder="Username" required value={user.name} onChange={onChangeInput} />
                    <input type="email" name="email" id="register-email" placeholder="Email" required value={user.email} onChange={onChangeInput} />
                    <input type="password" name="password" id="register-password" placeholder="Password" required value={user.password} autoComplete="true"  onChange={onChangeInput} />
                
                    <button type="submit">Register</button>
                    <p>Already have an account? 
                        <span> Login Here!</span>
                    </p>
                    <h3>{err}</h3>
                </form>
            </div>
        </section>
    ); 
}

export default Login;